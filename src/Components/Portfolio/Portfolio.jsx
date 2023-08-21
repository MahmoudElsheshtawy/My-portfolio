import './Portfolio.css'





const Portfolio = () => {
 return(
  <>
  <div className="Portfolio" id='Portfolio'>
    <div className="container">
    <h1>Protfolo</h1>
      {/* landeing-page */}
      <div className="project-1">
            <div className="right">yhtyh</div>
            <div className="left">ythh</div>
      </div>
      {/* e-commerce */}
      <div className="project-1">
            <div className="right">ytht</div>
            <div className="left">htyh</div>
      </div>
      {/* car-stor */}
      <div className="project-1">
            <div className="right">yht</div>
            <div className="left">yth</div>
      </div>
      {/* socail medai app */}
      <div className="project-1">
            <div className="right">tyht</div>
            <div className="left">yty</div>
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