import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import api from "../axios";
import { AuthContext } from "../context/authContext";

const Write = () => {
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  const { currentUser } = useContext(AuthContext);
  const state = useLocation().state;
  const [desc, setDesc] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [loading, setLoading] = useState(false);
  const [cat, setCat] = useState(state?.cat || "");
  const [img, setImg] = useState(state?.img || "");

  const navigate = useNavigate();
  const [image, setImage] = useState("");


  const uploadImage = async () => {
    let data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "Teetony");
    data.append("cloud_name", "dyln2uctb");
    try {
      await axios.post(
        "https://api.cloudinary.com/v1_1/dyln2uctb/image/upload",
        data
      ).then((res)=>{
        setImg(res?.data?.secure_url)
      })
     

    } catch (error) {
      console.log("Image upload error:", error);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {


     if(state){
        await uploadImage();
       setLoading(true);
       console.log(img)
        await api
            .put(`/posts/edit/${state.id}`, {
              title,
              desc:getText(desc),
              cat,
              img,
            })
            .then(() => {
              setLoading(false);
              navigate(`/post/${state.id}`);
            })
     }else{
        await uploadImage();
        setLoading(true);
        console.log(img)
        await api
            .post(`/posts/add`, {
              title,
              desc:getText(desc),
              cat,
              img,
              userId: currentUser.userId,
              date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            })
            .then((res) => {
              setLoading(false);
              navigate(`/post/${res.data.post.id}`);
            });
  
     }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={desc}
            onChange={setDesc}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>

          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name="file"
            onChange={(e) => setImage(e?.target?.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button onClick={handleClick}>
              {loading ? "Publishing" : "Publish"}
            </button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "art"}
              name="cat"
              value="art"
              id="art"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "science"}
              name="cat"
              value="science"
              id="science"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "technology"}
              name="cat"
              value="technology"
              id="technology"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "cinema"}
              name="cat"
              value="cinema"
              id="cinema"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "fashion"}
              name="cat"
              value="fashion"
              id="design"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="design">Fashion</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "food"}
              name="cat"
              value="food"
              id="food"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="food">Food</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "sport"}
              name="cat"
              value="sport"
              id="sport"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="sport">Sport</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "music"}
              name="cat"
              value="music"
              id="music"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="music">Music</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
