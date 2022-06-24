import React from 'react'
import Title from '../home/Title'
import {testimonal} from './TestimonalData'
import {BiMessageCheck} from 'react-icons/bi'
import "./test.css"

const Test = () => {
  return (
   <section className='testimonal padding'>
    <div className="container">
    <Title subtitle={'WHAT OUR CLIENTS'} title={'TELL ABOUT US '}/>

    <div className="content grid2">
        {testimonal.map((val)=>(
            <div className="items shadow">
                <div className="box flex">
                    <div className="img">
                        <img src={val.cover} alt="" />
                           <i><BiMessageCheck className='icon'/></i>
                    </div>
                        <div className="name">
                            <h2>{val.name}</h2>
                            <span>{val.post}</span>
                    </div>
                </div>
                <p>{val.desc}</p>
            </div>
        ))}
    </div>
    </div>
   </section>
  )
}

export default Test