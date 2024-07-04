import React, { useEffect } from 'react'
import './Preloader.css'
import { preLoaderAnim } from '../animations'
// import { preLoaderAnim } from '../anmat'
const Preloader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[])
  return (
 
    
   <div className='Preloader'>
      <div className='texts-container'>
          <span>gggddd</span>
          <span>ddddd</span>
          <span>dddddddd</span>
  </div>



   </div>
   
   
   
   
   
  )
}

export default Preloader