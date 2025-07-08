import React, { useState } from 'react'
import {motion} from 'framer-motion'
import './compStyles/hoverTrail.css'

const HoverTrail = () => {
  const [cords, setCords] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setCords({ x: e.clientX, y: e.clientY })
  }

  return (
    <div onMouseMove={handleMouseMove}>
      Mouse: {cords.x}, {cords.y}
    </div>
  )
}

export default HoverTrail
