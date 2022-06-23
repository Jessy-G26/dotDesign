import React from 'react'
import Title from '../home/Title'
import aboutbg from '../../img/288665407_560608222236955_5857487041979555298_n.png'
import { homeAbout } from './aboutDum'

import "./about.css"
const AboutCard = () => {
  return (
    <>
    
    <section className='abouthome'>
        <div className="container flex">
            <div className="left row">
               <img src={aboutbg} alt="" />
            </div>
            <div className="right row">
                <Title subtitle={'LEARN ANYTHING'} title={'Benefits of UI/UX design you will get '}/>
              
            <div className="items">
                {homeAbout.map((val)=>(
                    <div className="item flex">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <p>{val.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    </section>'
    
    </>
  )
}

export default AboutCard