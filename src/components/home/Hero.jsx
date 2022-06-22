import React from 'react'
import './home.css'
import {BsArrowRightSquare} from 'react-icons/bs'
import Title from './Title'



const Hero = () => {
  return (
    <>
    
    <section className="hero">
      <div className="container">
        <div className="row">
        <Title subtitle={'Welcome to dotDesign'} title={'Best UI/UX design'}/>
          <p>Do you want to work on your product with a team that follows a well-defined design process, meets deadlines, and delivers flawless results?. Our design team is a small design studio within a large software company that can help you create an engaging product quickly and easily.</p>
        <div className="button">
          <button >
            GET STARTED NOW <i><BsArrowRightSquare/></i>
          </button>
          <button className="primary-btn">
          View Projects <i><BsArrowRightSquare/></i>
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