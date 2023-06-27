import React from 'react'
import './Home.css'
import man from '../../assets/man.png'
import down from '../../assets/down.png'

const Home = () => {

  return (

    <div className='home' id='Home'>

        <div className="container">
            {/* left */}
          <div className="left">
            <div className="img-container">
              <img src={man} alt="" />
            </div>
             </div>
             {/* right */}
          <div className="right"> 

          <div className="text-r">
            <h2>Hi there, I'm</h2>
            <h1>Mahmoud Elsheshtawy</h1>
            <h3>Freelance <span>lll</span></h3>
          </div>
          
           <a href='#About'>
            <img src={down} alt="" />
          </a> 
           
          
          
          
          </div>
        </div>
        
        
        </div>
  )
}















export default Home