import React from 'react'
import './home.css'
import {BsArrowRightSquare} from 'react-icons/bs'



const Hero = () => {
  return (
    <>
    
    <section className="hero">
      <div className="container">
        <div className="row">
          <h3>Welcome to dotDesign</h3>
          <h1>Best UI/UX Design Services</h1>
          <p>Do you want to work on your product with a team that follows a well-defined design process, meets deadlines, and delivers flawless results? Use Intellectsoft's services for user interface and user experience. Our design team is a small design studio within a large software company that can help you create an engaging product quickly and easily.</p>
        <div className="button">
          <button >
            GET STARTED NOW <BsArrowRightSquare className='icon-btn'/>
          </button>
          <button className="primary-btn">
          View Projects<BsArrowRightSquare className='icon-btn'/>
          </button>
        </div>
        </div>
      </div>
    </section>

    <div className="margin">

    </div>
    
    </>
  )
}

export default Hero