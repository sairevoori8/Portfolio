import { useState } from 'react'
import './styles/App.css'
import React from 'react'
import Plane from './components/plane.jsx'
import Header from './components/header.jsx'
import StarsBackground from './components/StarsBackground.jsx'


const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className='home'>
        <StarsBackground />
        <Plane/>
      </div>
    </div>
  )

}

export default App
