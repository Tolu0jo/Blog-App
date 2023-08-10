import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import api from "../axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/posts${cat}`);
        setPosts(res.data.post);
        console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
 
  const getShortDesc = (desc) => {
    const words = desc.split(" ");
    if (words.length > 60) {
      return words.slice(0, 60).join(" ") + " ...";
    } else {
      return desc;
    }
  };

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
    <div className="home">
        <div className="image-background">    
        </div>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
            <Link className="link" to={`/post/${post.id}`}>
              <img src={`${post.img}`} alt="" />
              </Link>
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
           
              <p>{getShortDesc(post.desc)}</p>
              <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;