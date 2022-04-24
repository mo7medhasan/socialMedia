import Topbar from "../../components/topbar/Topbar";
import "./messenger.css";
import Conversation from "./../../components/conversations/Conversation";
import Message from "./../../components/messages/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "./../../context/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState("");
  const [arrivalMessages, setArrivalMessages] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState(null);

  const socket = useRef();
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("https://api-socket-social.herokuapp.com/");
    socket.current.on("getMessage", (data) => {
      setArrivalMessages({
        sender:data.senderId
        ,text:data.text,
        createdAt:Date.now(),
      })
    });
  }, []);

  useEffect(()=>{
    arrivalMessages&&currentChat?.members.includes(arrivalMessages.sender)&&
    setMessages((prev)=>[...prev,arrivalMessages])
  },[arrivalMessages,currentChat])
  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(user.followings.filter((f)=>{users.some((u)=>u.userId===f)}));
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getAllMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessages,
      conversationId: currentChat?._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );
    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessages,
    });
    try {
      const res = await axios.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessages("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              name=""
              placeholder="Search for friends "
              className="chatMenuInput"
              id=""
            />
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)} key={Math.random()}>
                <Conversation
                  key={Date.now}
                  conversations={c}
                  currentUser={user}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div key={Math.random()} ref={scrollRef}>
                      <Message
                        key={Math.random()}
                        message={m}
                        own={m.sender === user._id}
                      />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    placeholder="write something ....."
                    id=""
                    className="chatMessageInput"
                    onChange={(e) => setNewMessages(e.target.value)}
                    value={newMessages}
                  ></textarea>
                  <button
                    type="submit"
                    className="chatSubmitButton"
                    onClick={handleSubmit}
                  >
                    {" "}
                    send
                  </button>
                </div>{" "}
              </>
            ) : (
              <span className="noConversationText ">
                Open a conversation to start a chant .
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline 
            onlineUsers={onlineUsers}
             currentId={user._id} 
            setCurrentChat={setCurrentChat} />
          </div>
        </div>
      </div>
    </>
  );
}
