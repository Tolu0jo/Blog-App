import { useState } from "react";
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
const Write = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="add">
        <div className="content">
            <input type="text" placeholder="Title" />
            <div className="editorContainer">
            <ReactQuill  className="editor" theme="snow" value={value} onChange={setValue} />
            </div>
        </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                  
                    <input style={{display:"none"}} type="file" id="file" name="" />
                    <label className="file" htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save as draft</button>
                        <button>Update</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                    <input type="radio" name="category" value="art" id="art"/>
                    <label htmlFor="art">Art</label></div>
                    <div className="cat">
                    <input type="radio" name="category" value="science" id="science"/>
                    <label htmlFor="science">Science</label></div>
                    <div className="cat">
                    <input type="radio" name="category" value="technology" id="technology"/>
                    <label htmlFor="technology">Technology</label></div>
                    <div className="cat">
                    <input type="radio" name="category" value="cinema" id="cinema"/>
                    <label htmlFor="cinema">Cinema</label></div>
                    <div className="cat">
                    <input type="radio" name="category" value="fashion" id="fashion"/>
                    <label htmlFor="fashion">Fashion</label></div>
                    <div className="cat">
                    <input type="radio" name="category" value="food" id="food"/>
                    <label htmlFor="food">Food</label></div>
                    <div className="cat">
                    <input type="radio" name="category" value="sport" id="sport"/>
                    <label htmlFor="sport">Sport</label></div>
                    <div className="cat">
                    <input type="radio" name="category" value="music" id="music"/>
                    <label htmlFor="music">Music</label></div>
                    
                </div>
        </div>
    </div>
  )
}

export default Write