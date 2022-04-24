import './conversation.css'
import { useState, useEffect } from 'react';
import  axios  from 'axios';

export default function Conversation({conversations,currentUser}) {
 const PF =process.env.REACT_APP_PUBLIC_FOLDER;


  const [user,setUser]= useState(null);
  useEffect(()=>{
    const friendId=conversations.members.find((m)=>m !== currentUser._id);
    const getUser=async ()=>{
      try {
        const res=await axios.get("/users?userId="+friendId);
        setUser(res.data)
      } catch (err) {
        console.log(err)
      }
    };
    getUser()
  },[currentUser,conversations])

  return (
    <div className='conversation'>
        <img src={user?.profilePicture? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" className="conversationImg" />
        <span className="conversationName">{user?.userName}</span>
    </div>
  )
}
