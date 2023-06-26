import React from 'react'
import './Navbar.css'
import logo from '../../photo/logo.png'
import {FaBars,FaTimes,FaUser} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'
const Navbar = () => {
  return (
  <>
<div className="navbar">
    <div className="container">
      {/* logo */}
        <div className="logo"><img src={logo} alt=""/></div>
        {/* contact */}
        <div className="contact">
          <div className="number">
           <FaUser className='icon-contact'/> 
           <span>01067870535</span>

         </div>
         <div className="gmail">

          <BiLogoGmail className='icon-contact-1'/>
          <span>Elsheshtawym54@gmail.com</span>

         </div>

        </div>
      
        

       {/* nav-menu */}
        <div className="nav-menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skils</li>
            <li>Work</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="hamborger">
          <FaTimes/>
          <FaBars/>
        </div>
        
    </div>
</div>

  </>
  )
}

export default Navbar