import "./feed.css";
import Share from "./../share/Share";
import Post from "../post/Post";

// import {Posts} from "../../dummyData";
import { useEffect,useState } from 'react';

import axios from "axios"


export default function Feed() {

const [posts,setPosts]=useState([]);



useEffect(() => {
const fetchPosts= async()=>{
  const res=await axios.get("posts/timeline/62470bcf3e61d2aa3c452030");
  console.log(res);

}
fetchPosts();
 }, [])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {Posts.map((p)=>(
        <Post  key={p.id} post={p} />
        
        )) }
         */}
 

      </div>
    </div>
  );
}
