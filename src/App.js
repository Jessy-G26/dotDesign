import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes ,Route  } from 'react-router-dom'
import Head from './components/heading/Head'
import Home from './components/home/Home'
import About from './components/about/About'
import ServiceHome from './components/services/ServiceHome'
import ProjectHome from './components/projects/ProjectHome'



const App = () => {
  return (
    <div>
      <Router>
        <Head/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route  path="/service" element={<ServiceHome/>} />
        <Route  path="/project" element={<ProjectHome/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App