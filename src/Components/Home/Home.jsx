import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import video from '../../assets/video.mp4'
import './Home.css'

const Home = () => {
  return (
    <div className='home' id='Home'>
      <div className="container">
        <div className="top-container">
          <div className="video">
            <video autoPlay loop muted id='video' >
           <source src={video} type='video/mp4'/>

            </video>
          </div>
        </div>
        <hr/>
        <div className="bottom-container">
        <div className="text-r">
          <h2>Hi There, I'm;</h2>
          <h1><i>Mahmoud Elshehtawy.</i></h1>
          
          <h3 >Freelance:<span >
          <Typewriter
                  words={['Front end developer',]}
                  loop={70}
                  cursor
                  cursorStyle='<<'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
     
           />
          </span>
          </h3>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Home


          
