import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../axios";
import { Link } from "react-router-dom";

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/posts/?cat=${cat}`);
        setPosts(res.data.post);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
           <Link className="link" to={`/post/${post.id}`}>
          <img src={`${post?.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;