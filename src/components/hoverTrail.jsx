import React, { useState, useEffect } from 'react'
import { motion, rgba } from 'framer-motion'

const colors = [
  'rgba(236, 220, 96, 0.91)', 
  'rgba(255, 200, 0, 0.84)',  
  'rgba(210, 154, 13, 0.88)',  
]

const HoverTrail = () => {
  const [cords, setCords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCords({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {colors.map((color, i) => (
        <motion.div
          key={i}
          className="hover-trail"
          style={{
            background: color,
            position: 'fixed',
            width: 15 - i * 3,
            height: 15 - i * 3,
            borderRadius: '50%',
            zIndex: 1000,
            pointerEvents: 'none',
            filter: 'blur(1px)',
            boxShadow: `0 0 16px 4px ${color}`,
          }}
          animate={{
            x: cords.x - 10,
            y: cords.y - 10,
          }}
          transition={{
            type: "spring",
            stiffness: 15,      // lower for smoother
           // damping: 50,        // higher for more bounce
            mass: 0.1,          // lower for quicker response
            delay: i *0.2,    // small trailing delay
          }}
        />
      ))}
    </>
  )
}

export default HoverTrail
