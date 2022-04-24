import "./chatOnline.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/" + currentId);
      setFriends(res.data);
    };
    getFriends();
  }, [currentId]);
  useEffect(() => {
    setOnlineFriends(friends?.filter((f) => onlineUsers?.includes(f._id)));
  }, [friends, onlineUsers]);


  const handleClick =async(user)=>{
      try {
          const  res=await axios.get(`/conversations/find/${currentId}/${user._id}`)
          setCurrentChat( res.data)
      } catch (err) {
          console.log(err);
      }
  }

  return (
    <div className="chatOnline">
      {onlineUsers?.map((o) => {
        <div
          className="chatOnlineFriend"
          onClick={() => 
            handleClick(o)
          }
        >
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                o?.profilePicture
                  ? PF + o.profilePicture
                  : o.profilePicture + "person/noAvatar.png"
              }
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <div className="chatOnlineName">{o?.userName}</div>
        </div>;
      })}
    </div>
  );
}
