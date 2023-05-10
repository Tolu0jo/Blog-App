import "./sidebar.css"

const SideBar = () => {
  return (
    <><div className="sidebar">
      <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
      <img src="https://media.istockphoto.com/id/1129845783/photo/lagos-nigeria-lekki-ikoyi-bridge-lagos-landmark-infrastructure-and-urban-transportation.jpg?s=612x612&w=0&k=20&c=feTQNjRA0-tAuekoOo6Wr3N71gomagul1vGLB9dMxgE=" alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, perferendis, voluptate, quia reiciendis expedita facilis
        similique tempore dignissimos reprehenderit numquam quam voluptates quas sunt aperiam vel cum mollitia quasi facere.
      </p>
    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem"> Life</li>
          <li className="sidebarListItem"> Music</li>
          <li className="sidebarListItem"> Sport</li>
          <li className="sidebarListItem"> Fashion</li>
          <li className="sidebarListItem"> Tech</li>
          <li className="sidebarListItem"> Movie</li>
        </ul>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook fa-2xl"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter fa-2xl"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram fa-2xl"></i>
          </div>
        </div>
        </div>
      </div>
      </>
  )
}

export default SideBar