import React, { useState,useEffect } from 'react'
import './Portfolio.css'
import Portofilolest from "../Portofilolest/Portofilolest"



import {featuredPortfolio, WebPortfolio, mobilePortfolio,designPortfolio,contentPortfolio,} from "../data";


const Portfolio = () => {
 
   const [selected ,setSelected ]= useState ("featured");

   const [data, setData] = useState([]);



   const List=[
        {
         id:"featured",
         title:"Featured",
        },
        {
         id:"Web",
         title:"Web App",
        },
        {
         id:"mobile",
         title:"Mobile App",
        },
        {
         id:"design",
         title:"Design",
        },
        {
         id:"content",
         title:"Content"
      },
   ];
// data
   useEffect(() => {
      switch (selected) {
        
        case "Featured":
          setData(featuredPortfolio);
          break;
        case "Web":
          setData(WebPortfolio);
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


                {/* section tow */}
            <div className="bottom-container">
                  {data.map((data)=>(
                      <div className="item">
                      <img src={data.img} alt="" />
                      <h3>{data.title}</h3>
                      </div>

                  ))}
    
            </div>

   </div>
      
      
      
      
      
      
      
     
      
      
      
      
      </div>
  )
}

export default Portfolio