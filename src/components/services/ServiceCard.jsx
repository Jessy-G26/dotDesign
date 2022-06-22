import React from 'react'
import { serviceCard } from './serviceDum'
import service1 from '../../img/s1.webp'
import service2 from '../../img/s2.JPG'
import './service.css'

const ServiceCard = () => {
  return (
   <>
   <section className='serviceCard'>
    <div className="container gridCon">
        {serviceCard.map((val)=>{
            return (
            <div className="items">
                <div className="content flex">
                    <div className="left">
                       <div className="img">
                        <img src={service1} alt="" />
                       </div>
                    </div>
                    <div className="text">
                        <h1>{val.serviceName}</h1>
                        <div className="details">
                            {val.serviceTeam.map((details)=>(
                               <>
                               <div className="box">
                                <div className="sImg">
                                    <img src={service2} alt="" />
                                </div>
                                <div className="para">
                                    <h4>{details.name}</h4>
                                    <h6>{details.servicePosition}</h6>
                                </div>
                                </div>
                                <span>{details.priceAll}</span>
                           </>
                            ))}
                        </div>
                    </div>
                </div>
             
                <button className='outline-btn'>Contact</button>
            </div>
              )
        })}
      
    </div>
   </section>
   </>
  )
}

export default ServiceCard