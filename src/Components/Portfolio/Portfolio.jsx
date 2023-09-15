/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import './Portfolio.css'

import project from '../../project.json'



const Portfolio = () => {
 return(
  <>
  
  <div className="Portfolio" id='Portfolio'>
    <div className="container" style={{background:'red'}}>
    <h1>Protfolo</h1>
      {/* landeing-page */}
      <div className="projects">
          {project.map((item)=>(
           
            <div key={item.id}>
            <div className='right'>
                  
                  <span>{item.name}</span>
                  <span><img src={item.imgUrl} href="https://vercel.com/mahmoudelsheshtawy/e-commerce-app/4cpLZLmNiAh2QSkzHBQm7Bim1yCA"/></span>
                 
                  
                  </div>
            <div> </div>
            </div>
          ))}
      </div>
 
    </div>
  </div>
  
  
  
  
  </>


 )

}

export default Portfolio



































// imports


// import {featuredPortfolio, WebPortfolio, mobilePortfolio,designPortfolio,contentPortfolio,} from "../data";
// import Portofilolest from "../Portofilolest/Portofilolest"
// import React, { useState,useEffect } from 'react'



// in side function
//    const [selected ,setSelected ]= useState ("featured");

//    const [data, setData] = useState([]);



//    const List=[
//         {
//          id:"featured",
//          title:"Featured",
//         },
//         {
//          id:"Web",
//          title:"Web App",
//         },
//         {
//          id:"mobile",
//          title:"Mobile App",
//         },
//         {
//          id:"design",
//          title:"Design",
//         },
//         {
//          id:"content",
//          title:"Content"
//       },
//    ];
// // data
//    useEffect(() => {
//       switch (selected) {
        
//         case "Featured":
//           setData(featuredPortfolio);
//           break;
//         case "Web":
//           setData(WebPortfolio);
//           break;
//         case "mobile":
//           setData(mobilePortfolio);
//           break;
//         case "design":
//           setData(designPortfolio);
//           break;
//         case "content":
//           setData(contentPortfolio);
//           break;
//         default:
//           setData(featuredPortfolio);
//       }
//     }, [selected]);

//   return (
//     <div className='Portfolio' id='Portfolio'>
//               <div className="container">
//                 <div className="top-container">
//                   <h1>Protfolo</h1>
//                     <ul>
//                       {List.map((item) => (
//                             <Portofilolest
//                               title={item.title}
//                               active={selected === item.id}
//                               setSelected={setSelected}
//                               id={item.id}
//                             />
//                           ))}
//                     </ul>

//                 </div>


//                 {/* section tow */}
//             <div className="bottom-container">
//                   {data.map((data)=>(
//                       <div className="item">
//                       <img src={data.img} alt="" />
//                       <h3>{data.title}</h3>
//                       </div>

//                   ))}
    
//             </div>

//    </div>
      
      
      
      
      
      
      
     
      
      
      
      
//       </div>
//   )