/* eslint-disable jsx-a11y/alt-text */
import './Portfolio.css'
// import ecomerce from '../../assets/photo/ecomerce.png'
// import prayers from '../../assets/photo/prayers.png'
// import todo from '../../assets/photo/todo.png'
// import socail from '../../assets/photo/socail.png'





const Portfolio = ({information,id ,link ,imgUrl,tools,name}) => {
 return(
  <>
          <div className="container" style={{background:'#000' ,color:'#fff'}}>

                 <div className="projects" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom" style={{width:'70%',margin:'auto',background:'#000',marginBottom:'20px'}}>


                    {/* {project.map((item)=>( */}
       
                                   <div  key={id} style={{display:'flex', border:" 1px solid rgb(43 43 43)" ,padding:'1rem',marginBottom:'20px'}}>



                                      <div className="left" style={{display:"flex",flexDirection:'column',flex:'1'}}>
                                                    <span style={{fontWeight:'bold',marginBottom:'10px' }} >{name}</span> 
                                                    <span style={{fontSize:'16px',color:'#aaa'}}>{information}</span>
                                          <div className="stck-use" style={{marginTop:'30px'}}>
                                                  <span style={{ padding:'3px',color:'#000',marginRight:'30px',background: 'rgb(130 130 130)',borderRadius:'5px'}}>React.js</span>
                                                  <span style={{ padding:'3px',color:'#000',background: 'rgb(130 130 130)',borderRadius:'5px'}}>vanila-Css</span>
                                                  <img></img>
                                                  
                                            </div>
                                            
                                          <div className="btn" style={{display:'flex',justifyContent:'space-around',alignItems:'center',marginTop:'50px'}} >
                                          <button className="button" ><a style={{color:'#fff'}} href={link}>Deploy</a></button>

                                            <button className="button">
                                                Code
                                            </button>
                                            </div>

                                        </div>
                                                    <div className='right ' style={{display:'flex',flex:'1',justifyContent:'flex-end'}}>
                                                      <span><img src={imgUrl} /></span>
                                                    </div> 
                                   </div>
                       {/* ))} */}
               
        </div>
       </div>
        
 

  </>
)}


export default Portfolio






                
 