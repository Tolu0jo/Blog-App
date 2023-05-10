import "./post.css"

const Post = () => {
  return (
    <div className="post">
        <img className="postImg" src="https://www.ncbev.com/sites/main/files/main-images/camera_lense_0.jpeg" alt="" />
    <div className="postInfo">
    <div className="postCats">
        <span className="postCat">Music</span>
        <span className="postCat">Life</span>
    </div>
      <span className="postTitle">Lorem ipsum, dolor si amet</span>
        <hr/>
        <span className="postDate">1 hour ago</span>
    </div > 
    </div>
  )
}

export default Post