import "./feed.css";
import Share from "./../share/Share";
import Post from "../post/Post";

// import {Posts} from "../../dummyData";
import { useEffect,useState } from 'react';

import axios from "axios"


export default function Feed({userName}) {

const [posts,setPosts]=useState([]);



useEffect(() => {
const fetchPosts= async()=>{
  const res=  userName ? await axios.get("posts/profile/"+userName) : 
  await axios.get("posts/timeline/62470bcf3e61d2aa3c452030"); 
  setPosts(res.data);

}
fetchPosts();
 }, [userName])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p)=>(
        <Post  key={p._id} post={p} />
        
        )) }
        
 

      </div>
    </div>
  );
}
