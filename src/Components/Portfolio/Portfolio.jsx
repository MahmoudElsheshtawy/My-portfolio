import React from 'react'
import './Portfolio.css'
import project from '../../photo/project.png'
const Portfolio = () => {
  return (
    <div className='Portfolio' id='Portfolio'>
              <div className="container">
                <div className="top-container">
                  <h1>Protfolo</h1>
                  <ul>

                    <li className='active'>Featurd</li>
                    <li>Web App</li>
                    <li>Mobile App </li>
                    <li>Dising</li>
                    <li>Branding</li>
            
                    </ul>

                </div>
            <div className="bottom-container">
                     <div className="item">
                     <img src={project} alt="" />
                        <h3>Banking App</h3>
                     </div>

                     <div className="item">
                     <img src={project} alt="" />
                        <h3>Banking App</h3>
                     </div>

                     <div className="item">
                     <img src={project} alt="" />
                        <h3>Banking App</h3>
                     </div>

                     <div className="item">
                     <img src={project} alt="" />
                        <h3>Banking App</h3>
                     </div>

                     <div className="item">
                     <img src={project} alt="" />
                        <h3>Banking App</h3>
                     </div>

                     <div className="item">
                     <img src={project} alt="" />
                        <h3>Banking App</h3>
                     </div>


            </div>
                  



              </div>
      
      
      
      
      
      
      
     
      
      
      
      
      </div>
  )
}

export default Portfolio