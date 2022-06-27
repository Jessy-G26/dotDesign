import React from 'react'
import { team } from './teams'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
// import Title from '../home/Title'
import "./Team.css"
const TeamCard = () => {
  return (
    <>
  {team.map((val)=>(
    
    <div id='teams'className="items shadow">
        <div className="img">
            <img src={val.cover} alt="" />
            <div className="overlay">
                    <AiFillFacebook className='icon'/>
                    <AiOutlineInstagram className='icon'/>
                    <AiOutlineTwitter className='icon'/>
                    <AiOutlineGithub className='icon'/>
            </div>
         </div>
         <div className="details">
                <h2>{val.name}</h2>
                <p>{val.work}</p>
                <a href={val.port}  rel="noopener noreferrer" target='_blank'><button className='t-btn'>View Portfolio</button></a>
            </div>
    </div>
  ))}
    </>
  )
}

export default TeamCard