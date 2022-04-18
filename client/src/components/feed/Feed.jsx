import "./feed.css";
import Share from "./../share/Share";
import Post from "../post/Post";

// import {Posts} from "../../dummyData";
import { useEffect, useState, useContext } from 'react';

import axios from "axios"
import { AuthContext } from './../../context/AuthContext';


export default function Feed({userName}) {

const [posts,setPosts]=useState([]);

const {user} =useContext(AuthContext)

useEffect(() => {
const fetchPosts= async()=>{
  const res=  userName ? await axios.get("posts/profile/"+userName) : 
  await axios.get("posts/timeline/"+user._id); 
  setPosts(res.data.sort((p1,p2)=>{
    return new Date(p2.createdAt) - new Date(p1.createdAt);
  }));

}
fetchPosts();
 }, [userName,user._id])

  return (
    <div className="feed">
      <div className="feedWrapper">
       {(!userName|| userName===user.userName)&& <Share />}
        {posts.map((p)=>(
        <Post  key={p._id} post={p} />
        
        )) }
        
 

      </div>
    </div>
  );
}
