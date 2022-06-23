import React from 'react'
import './App.css'
import AboutCard from './components/about/AboutCard'
import Footer from './components/footer/Footer'
import Head from './components/heading/Head'
import Hero from './components/home/Hero'
import ProjectCard from './components/projects/ProjectCard'
import ServiceCard from './components/services/ServiceCard'
import Team from './components/teams/Team'
// import Header from './components/heading/Header'
// import { BrowserRouter as Router, Routes ,Route  } from 'react-router-dom'
// import Head from './components/heading/Head'
// import Home from './components/home/Home'
// import About from './components/about/About'
// import ServiceHome from './components/services/ServiceHome'
// import ProjectHome from './components/projects/ProjectHome'
// import Head from './components/heading/Head'
// import Home from './components/home/Home'



const App = () => {
  return (
    <div>
     
     
     <Head/>
     <Hero/>
      <AboutCard/>
      <ServiceCard/>
      <ProjectCard/>
      <Team/>
     {/* <Footer/> */}

    </div>
  )
}

export default App