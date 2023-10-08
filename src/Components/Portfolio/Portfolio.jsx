/* eslint-disable jsx-a11y/alt-text */
import './Portfolio.css'
import ecomerce from '../../assets/photo/ecomerce.png'


const Portfolio = () => {
 return(
  <>
  
  <div className="Portfolio" id='Portfolio'>
    
              {/* commerce website */}
              <div className="container" style={{background:'#000' ,color:'#fff'}}>
              {/* <h1>Protfolo</h1> */}
              <div className="project" style={{display:'flex', border:" 1px solid rgb(43 43 43)" ,padding:'1rem',marginBottom:'20px',flexWrap:'wrap'}}>

                  <div className="left" style={{display:"flex",flexDirection:'column',flex:'1'}}>
                    <span style={{fontWeight:'bold',marginBottom:'10px' }}>e-commerce website</span> 
                     <span style={{fontSize:'16px',color:'#aaa'}}>
                      Im Built a ecommerce website from 
                      scratch,important topics of react js such as jsx,components, props, state, 
                      lifecycle of components, conditional rendering, lists, keys, context api.</span>
                      <div className="stck-use" style={{marginTop:'30px'}}>
                        <span style={{ padding:'3px',color:'#000',marginRight:'30px',background: 'rgb(130 130 130)',borderRadius:'5px'}}>React.js</span>
                        <span style={{ padding:'3px',color:'#000',background: 'rgb(130 130 130)',borderRadius:'5px'}}>vanila-Css</span>
                        <img></img>
                        
                      </div>
                       <div className="btn" style={{display:'flex',justifyContent:'space-around',alignItems:'center',marginTop:'50px',cursor:'pointer'}} >
                            <button className="button" ><a style={{color:'#fff'}} href="https://e-commerce-app-git-master-mahmoudelsheshtawy.vercel.app/">Deploy</a></button>
     
                               <button className="button">
                                Code
                                </button>
                  </div>
                     
                  </div>
                  <div className="right" style={{display:'flex',flex:'1',justifyContent:'flex-end'}}>

                          <img src={ecomerce} />
                        </div>
              </div>
              </div>
              {/* scoal-medai-app */}
             
                
  </div>
  
  
  
  
  </>


 )

}

export default Portfolio





/* <div className="container" style={{background:'#000' ,color:'#fff'}}>
<h1>Protfolo</h1>
  {/* landeing-page */
  // <div className="projects" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom" style={{width:'70%',margin:'auto',background:'#000',marginBottom:'20px'}}>
      // {project.map((item)=>(
       
        // <div  key={item.id} style={{display:'flex', border:" 1px solid rgb(43 43 43)" ,padding:'1rem',marginBottom:'20px'}}>
          //  <div className="left" style={{display:"flex",flexDirection:'column',flex:'1'}}>
                  /* <span style={{fontWeight:'bold',marginBottom:'10px' }} >{item.name}</span> */
                  // <span style={{fontSize:'16px',color:'#aaa'}}>{item.information}</span>
                  // <div className="stck-use" style={{marginTop:'30px'}}>
                  //   <span style={{ padding:'3px',color:'#000',marginRight:'30px',background: 'rgb(130 130 130)',borderRadius:'5px'}}>React.js</span>
                  //   <span style={{ padding:'3px',color:'#000',background: 'rgb(130 130 130)',borderRadius:'5px'}}>vanila-Css</span>
                  //   <img></img>
                    
                  // </div>
                  // <div className="btn" style={{display:'flex',justifyContent:'space-around',alignItems:'center',marginTop:'50px'}} >
                  // <button className="button" ><a style={{color:'#fff'}} href="https://e-commerce-app-git-master-mahmoudelsheshtawy.vercel.app/">Deploy</a></button>

                  // <button className="button">
                //      Code
                //   </button>
                //  </div>
                //   </div>
                //   <div className='right ' style={{display:'flex',flex:'1',justifyContent:'flex-end'}}>
                //   <span><img src={item.imgUrl} /></span>
                //   </div>
                
 