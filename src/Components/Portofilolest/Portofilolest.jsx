import React from 'react'
import './Portofilolest.css'
import Allprojects from '../../Allprojects.json'
import Portfolio from '../Portfolio/Portfolio'
const Portofilolest = () => {
  return (
  <>
  <div className="contanier"  style={{background:'#000' ,color:'#fff'}}>
       <div className="header">
        <h1> prttofoluep</h1>
        <span>___</span>
        <div className="cards">


          {Allprojects.map((item)=>(
            <div key={item.id}>
              <Portfolio {...item}/>

            </div>

          ))}
        {/* {AllCategorys.map((item)=>(
                <div key={item.id} >
                <AllCategory {...item} />
              </div>
            ))} */}
        </div>
       </div>




  </div>
  </>
  )
}

export default Portofilolest
// no active
{/* <li
className={active ? "Portofilolest active" : "Portofilolest"}
onClick={() => setSelected(id)}
>
{title}
</li> */}