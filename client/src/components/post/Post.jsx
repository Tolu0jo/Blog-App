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
                <hr />
                <span className="postDate">1 hour ago</span>
            </div >
            <p className="postDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Alias consequatur delectus sunt assumenda sit mollitia error eum facilis, 
                nisi maxime placeat corrupti officia impedit, architecto modi laborum, veritatis
                 dolorem nesciunt distinctio blanditiis esse ipsum neque. Cum, nobis delectus 
                 tempore quia tenetur earum officia
            </p>
        </div>
    )
}

export default Post