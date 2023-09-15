import React, { useState } from 'react'
import './Navbar.css'
import logo_tow from '../../../src/photo/photo/logo_tow.png'
import {FaBars,FaTimes,FaUser} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'




const Navbar = () => {

  const [Nav, setNav]=useState(false)
  const handelNav = () => setNav(!Nav)

  return (
  <>

<div className="navbar  active" >
    <div className="container">
      {/* logo */}
        <div className="logo"><img src={logo_tow} alt=""/></div>
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

        <div className={Nav ? "nav-menu active":"nav-menu"}>
          <ul>
            <li onClick={()=>setNav(false)}><a href='#Home'>Home</a></li>
            <li onClick={()=>setNav(false)}><a href='#Portfolio'>Portfolio</a></li>
            <li onClick={()=>setNav(false)}><a href='#About'>About Me</a></li>
            <li onClick={()=>setNav(false)}><a href='#Contact Me'>Contact Me</a></li>
            
            
          </ul>
          <button className="btn"> Lern more
</button>
        </div>
        <div className="hamborger" onClick={handelNav}>
          {Nav?(<FaTimes/> ):( <FaBars/>)}
         
         
        </div>
        
    </div>
</div>



  </>
  )
}



export default Navbar