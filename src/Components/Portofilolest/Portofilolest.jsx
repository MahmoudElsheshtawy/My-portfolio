import React from 'react'
import './Portofilolest.css'

const Portofilolest = ({id,title ,active, setSelected}) => {
  return (
    <li
    className={active ? "Portofilolest active" : "Portofilolest"}
    onClick={() => setSelected(id)}
  >
    {title}
  </li>
  )
}

export default Portofilolest