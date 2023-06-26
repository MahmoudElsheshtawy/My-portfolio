import React from 'react'
import './Navbar.css'
import logo from '../../photo/logo.png'
const Navbar = () => {
  return (
  <>
<div className="navbar">
    <div className="container">
        <div className="logo">
        <img src={logo} alt="" />
                  </div>
        <div className="nav-menu"></div>
        <div className="hamborger"></div>
        
    </div>
</div>

  </>
  )
}

export default Navbar