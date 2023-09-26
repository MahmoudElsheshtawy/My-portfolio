/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import './Portfolio.css'

import project from '../../project.json'



const Portfolio = () => {
 return(
  <>
  
  <div className="Portfolio" id='Portfolio'>
    <div className="container" style={{background:'#000' ,color:'#fff'}}>
    <h1>Protfolo</h1>
      {/* landeing-page */}
      <div className="projects" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom" style={{width:'70%',margin:'auto',background:'#000',padding:'1rem',    border:" 1px solid rgb(43 43 43)",marginBottom:'20px'}}>
          {project.map((item)=>(
           
            <div  key={item.id} style={{display:'flex',}}>
               <div className="left" style={{display:"flex",flexDirection:'column',flex:'1'}}>
                      <span style={{fontWeight:'bold',marginBottom:'10px' }} >{item.name}</span>
                      <span style={{fontSize:'16px',color:'#aaa'}}>{item.information}</span>
                      <div className="stck-use" style={{marginTop:'30px'}}>
                        <span style={{ padding:'3px',color:'#000',marginRight:'30px',background: 'rgb(130 130 130)',borderRadius:'5px'}}>React.js</span>
                        <span style={{ padding:'3px',color:'#000',background: 'rgb(130 130 130)',borderRadius:'5px'}}>vanila-Css</span>
                        <img></img>
                        
                      </div>
                      <div className="btn" style={{display:'flex',justifyContent:'space-around',alignItems:'center',marginTop:'50px'}} >
                      <button className="button" ><a style={{color:'#fff'}} href="https://e-commerce-app-git-master-mahmoudelsheshtawy.vercel.app/">Deploy</a></button>

                      <button className="button">
                         Code
                      </button>
                     </div>
                      </div>
                      <div className='right ' style={{display:'flex',flex:'1',justifyContent:'flex-end'}}>
                      <span><img src={item.imgUrl} /></span>
                      </div>
                    
               
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