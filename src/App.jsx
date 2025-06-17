import { useState } from 'react'
import './App.css'
import React from 'react'
import {motion} from 'framer-motion'

const App = () => {
  return (
    <div className='container'>
      <div className='home'>
        <motion.div className='plane'
          animate={{
            x:[1400,370],
            y:[-20,20]
          }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
            delay: 0.2
          }}>
            
          <img src="./plane-br.png" alt="noimg" height={200}/>
        </motion.div>
      </div>
    </div>
  )

}

export default App
