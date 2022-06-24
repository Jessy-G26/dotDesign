import React from 'react'
import { price } from './PriceData'
import "./price.css"
const PriceCard = () => {
  return (
   <>
    
    {price.map((val)=>(
        <div className="items shadow">
            <h4>{val.name}</h4>
            <h1><span>₱</span>
                {val.Prices}
            </h1>
            <p>{val.desc}</p>
            <button className='outline-btn'>GET STARTED NOW</button>
        </div>
    ))}
    
   </>
  )
}

export default PriceCard