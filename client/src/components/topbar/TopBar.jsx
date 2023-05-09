import "./topbar.css"

const TopBar = () => {
  return (
    <div className= "top">
    <div className="topleft">
    <i className="fa-brands fa-square-facebook fa-2xl"></i>
    <i className="fa-brands fa-square-twitter fa-2xl"></i>
    <i className="fa-brands fa-square-instagram fa-2xl"></i>
    </div>
    <div className="topcenter">
        <ul className="toplist">
            <li className="toplistitem">HOME</li>
            <li className="toplistitem">ABOUT</li>
            <li className="toplistitem">CONTACT</li>
            <li className="toplistitem">WRITE</li>
            <li className="toplistitem">LOGOUT</li>
        </ul>
    </div>
    <div className="topright">
        <img 
        className="topimage"src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
        <i className="searchicon fa-solid fa-magnifying-glass fa-xl"></i>
    </div>

    </div>
  )
}

export default TopBar