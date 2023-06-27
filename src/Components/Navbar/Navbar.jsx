import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../photo/logo.png'
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

        <div className={Nav ? "nav-menu active":"nav-menu"}>
          <ul>
            <li onClick={()=>setNav(false)}><a href='#Home'>Home</a></li>
            <li onClick={()=>setNav(false)}><a href='#About'>About</a></li>
            <li onClick={()=>setNav(false)}><a href='#Skils'>Skils</a></li>
            <li onClick={()=>setNav(false)}><a href='#Work'>Work</a></li>
            <li onClick={()=>setNav(false)}><a href='#Contact Us'>Contact Us</a></li>
            
            
          </ul>
          <button class="btn"> lern more
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