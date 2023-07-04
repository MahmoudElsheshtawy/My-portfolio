import React, { useState,useEffect } from 'react'
import './Portfolio.css'
import Portofilolest from "../Portofilolest/Portofilolest"


import project from '../../photo/project.png'
// import project from '../photo/project.png'
// import react from '../photo/react.png'
import {
   featuredPortfolio,
    webPortfolio,
     mobilePortfolio,
     designPortfolio,
     contentPortfolio,} from "../data";
const Portfolio = () => {
 
   const [selected ,setSelected]=useState ("Featurd");
  const [data, setData] = useState([]);



   const List=[

        {
         id:"featured",
         title:"Featurd",
        },
        {
         id:"Web",
         title:"Web App",



        },
        {
         id:"mobile",
         title:"mobile App",


        },
        {
         id:"desingn",
         title:"Design",
        },
        {
         
         id:"content",
         title:"Content"
      
      
      },


   ];
   useEffect(() => {
      switch (selected) {
        case "featured":
          setData(featuredPortfolio);
          break;
        case "web":
          setData(webPortfolio);
          break;
        case "mobile":
          setData(mobilePortfolio);
          break;
        case "design":
          setData(designPortfolio);
          break;
        case "content":
          setData(contentPortfolio);
          break;
        default:
          setData(featuredPortfolio);
      }
    }, [selected]);
  return (
    <div className='Portfolio' id='Portfolio'>
              <div className="container">
                <div className="top-container">
                  <h1>Protfolo</h1>
                  <ul>

                   {/* {List.map((item)=>(
                     <Portofilolest title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>

                   ))}  */}
                      {List.map((item) => (
          <Portofilolest
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
            
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