import React from 'react'
import './Home.css'
import man from '../../assets/man.png'
import down from '../../assets/down.png'
import { Typewriter } from 'react-simple-typewriter'
 



    function Home() {

 
    
      return (
     
        <div className='home' id='Home'>

          <div className="container">

            <div className="left">
              <div className="img-container">
                <img src={man} alt="" />
              </div>
            </div>

            <div className="right">
              <div className="text-r">
                <h2>Hi There, I'm;</h2>
                <h1><i>Mahmoud Elshehtawy.</i></h1>
                
                <h3 >Freelance:<span >
                <Typewriter
            words={['Front end developer',]}
            loop={7}
            cursor
            cursorStyle='<<'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
  />
                </span>
                </h3>
                
              </div>

              <a href='#Portfolio'>
                <img src={down} alt="" />
              </a>




            </div>
          </div>

        </div>
      );
    }



export default Home