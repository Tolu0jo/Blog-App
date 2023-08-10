import React, { useEffect, useState } from "react";
// import Edit from "../img/edit.png";
// import Delete from "../img/delete.png";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import api from "../axios";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];
  console.log(postId);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await api.delete(`/posts/delete/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="single">
      <div className="content">
        <img src={`${post?.img}`} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <p>{moment(post.date).fromNow()}</p>

            <div className="details">
              <span>{post.username}</span>
              {currentUser.username === post.username && (
                <div className="edit">
                  <Link to={`/write?edit=2`} state={post}>
                    <BiEdit size={30} className="editIcon" />
                  </Link>
                  <MdDeleteForever
                    size={30}
                    className="deleteIcon"
                    onClick={handleDelete}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <h1>{post.title}</h1>
        <p>{getText(post.desc)}</p>{" "}
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
