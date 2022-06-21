import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes ,Route  } from 'react-router-dom'
import Head from './components/heading/Head'
import Home from './components/home/Home'


const App = () => {
  return (
    <div>
    
      <Router>
        <Head/>
       
        <Routes>
        <Route path="/" component={Home} />
        </Routes>
      </Router>
    </div>
  )
}

export default App