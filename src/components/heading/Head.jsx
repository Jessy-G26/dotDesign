import React, { useState } from 'react'
import Header from './Header'
import "./header.css"
import {Link} from 'react-router-dom'
import {BiExit} from 'react-icons/bi'
import {AiOutlineMenu} from 'react-icons/ai'
const Head = () => {
    const [click, setClick] = useState(false)
    const [activeNav,setActiveNav]= useState('#')
  return (
    <div>
        <header>
             <nav className='flex'>
            <ul className={click ? "mobile-nav" : "flex" } onClick={()=> setClick(false)}>
                <li> <a href="#"onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a></li>
                <li><a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a></li>
                <li> <a href="#services" onClick={()=> setActiveNav('#experience')} className={activeNav === '#services' ? 'active' : ''}>Services</a></li>
                <li> <a href="#projects" onClick={()=> setActiveNav('#experience')} className={activeNav === '#projects' ? 'active' : ''}>Projects</a></li>
                <li> <a href="#teams" onClick={()=> setActiveNav('#experience')} className={activeNav === '#teams' ? 'active' : ''}>Teams</a></li>
                <li></li>
            </ul>
            <div className="start">
                <div className="button">Contact Us</div>
            </div>
            <button className="toggle" onClick={()=> setClick(!click)}>
                {click ? <BiExit/> : <AiOutlineMenu/> }
            </button>
            </nav> 
   
        </header>
    </div>
  )
}

export default Head