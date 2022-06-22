import React, { useState } from 'react'
import Header from './Header'
import "./header.css"
import {Link} from 'react-router-dom'
import {BiExit} from 'react-icons/bi'
import {AiOutlineMenu} from 'react-icons/ai'
const Head = () => {
    const [click, setClick] = useState(false)
  return (
    <div>
        <Header/>
        <header>
            <nav className='flex'>
            <ul className={click ? "mobile-nav" : "flex" } onClick={()=> setClick(false)}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/service'>Services</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/team'>Team</Link></li>
                <li><Link to='/project'>Project</Link></li>
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