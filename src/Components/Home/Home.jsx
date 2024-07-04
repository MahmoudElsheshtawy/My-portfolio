import React, { useEffect } from 'react'
// import { Typewriter } from 'react-simple-typewriter'
// import video from '../../assets/video.mp4'
// import './Home.css'
// import html from '../../photo/html.png'
// import css from '../../photo/css.png'
// import javascript from '../../photo/javascript.png'
// import react from '../../photo/react.png'
// import tillwend from '../../photo/tillwend.png'
import me from '../../assets/me.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    Aos.init({duration:1500})
   })
  return (
    <div className='home' id='Home'>
                    <div  className="image">
                    <img data-aos="zoom-out-down"src={me} alt="" style={{width:"300px"}} />
                    </div>
                    <div className="container">
                      <div className="top-container">
                     
                        {/* <div className="video">
                          <video data-aos="fade-down" autoPlay loop muted id='video' >
                              <source src={video} type='video/mp4'/>
                          </video>
                          
                        </div> */}
                      </div>

                      <div className="bottom-container">

                        <div className="text-">
                             <h2>Hi There, I'm;</h2>
                               <h1><i>_______Mahmoud Elshehtawy.</i></h1>
                               <box-icon type='logo' name='linkedin'></box-icon>
                                {/* <h3>Freelance:<span> */}
                                {/* <Typewriter
                                        words={['Front end developer',]}
                                        loop={70}
                                        cursor
                                        cursorStyle='<<'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                          
                                />
                                </span> */}
                                {/* </h3> */}
                        </div>
                    </div>
  
                    {/* <div className="My-Skils">
                      <h2>Tech Stack<span>  |</span></h2>
                     <div  className="Skils">
                      <img src={html} alt="" />
                      <img src={css} alt="" />
                      <img src={javascript} alt="" />
                      <img src={react} alt="" />
                      <img src={tillwend} alt="" />
                     </div> */}


                    </div>
                  </div>





    // </div>

  )
}

export default Home


          
