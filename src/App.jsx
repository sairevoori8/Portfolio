import { useState } from 'react'
import './styles/App.css'
import React from 'react'
import Plane from './components/plane.jsx'
import Header from './components/header.jsx'
import StarsBackground from './components/StarsBackground.jsx'
import HoverTrail from './components/hoverTrail.jsx'


const App = () => {
  return (
    <div className='container'>
      <HoverTrail /> 
      <Header/>
      <div className='home'>
        <StarsBackground />
        <Plane/>
      </div>
    </div>
  )

}

export default App
