import "./header.css"

const Header = () => {
  return (
    <div className="header">
        <div className="headerTitle">
            <span className="headerTitleSm">React</span>
            <span className="headerTitleLg">Blog</span>
        </div>
     <img className="headerImg" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" 
     />
    </div>
  )
}

export default Header