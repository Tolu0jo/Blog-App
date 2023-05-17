import React, { useContext } from 'react'
import Logo from '../assets/bloglogo.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const NavBar = () => {
 const{currentUser,logout}=useContext(AuthContext)
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
              <Link to={"/"}>
              <img src={Logo} alt="" />
              </Link>
                
            </div>
            <div className="links">
                <div className="categories">
                <Link className='link' to="/?cat=art"><h6>ART</h6></Link>
                <Link className='link' to="/?cat=science"><h6>SCIENCE</h6></Link>
                <Link className='link' to="/?cat=technology"><h6>TECHNOLOGY</h6></Link>
                <Link className='link' to="/?cat=cinema"><h6>CINEMA</h6></Link>
                <Link className='link' to="/?cat=fashion"><h6>FASHION</h6></Link>
                <Link className='link' to="/?cat=food"><h6>FOOD</h6></Link>
                <Link className='link' to="/?cat=sport"><h6>SPORT</h6></Link>
                <Link className='link' to="/?cat=music"><h6>MUSIC</h6></Link>
                </div>
               
                 <span>{currentUser?.username}</span>
                 {currentUser?<span onClick={logout}>Logout</span>:<Link className ="link" to="/login">login</Link>}
                 <div className='write'>
                 <span><Link className ="link"to="/write">Write</Link></span>
            </div>
            </div>
        
        </div>
    </div>
  )
}

export default NavBar