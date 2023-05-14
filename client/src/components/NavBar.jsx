import React from 'react'
import Logo from '../assets/bloglogo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="" />
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
               
                 <span>John</span>
                 <span>Logout</span>
                 <div className='write'>
                 <span><Link className ="link"to="/write">Write</Link></span>
            </div>
            </div>
        
        </div>
    </div>
  )
}

export default NavBar