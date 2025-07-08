import React from 'react'
import { motion } from 'framer-motion'

const NUM_FALLING_STARS = 3
const NUM_GLOWING_STARS = 10

// Generate random positions for glowing stars
const glowingStars = Array.from({ length: NUM_GLOWING_STARS }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 2 + 1}px`,
  glow: Math.random() * 0.7 + 0.3,
}))

// Generate random positions and delays for falling stars
const fallingStars = Array.from({ length: NUM_FALLING_STARS }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 5,
}))

const StarsBackground = () => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      width: '100vw',
      height: '40vh',
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}
  >
    {/* Glowing scattered stars */}
    {glowingStars.map(star => (
      <motion.div
        key={star.id}
        style={{
          position: 'absolute',
          top: star.top,
          left: star.left,
          width: star.size,
          height: star.size,
          borderRadius: '50%',
          background: 'yellow',
          boxShadow: `0 0 8px 2px rgba(255,255,255,${star.glow})`,
          opacity: star.glow,
        }}
        animate={{
          opacity: [star.glow, star.glow * 0.5, star.glow],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: Math.random() * 2 + 2,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: Math.random() * 2,
        }}
      />
    ))}

    {/* Falling stars */}
    {fallingStars.map(star => (
      <motion.div
        key={star.id}
        style={{
          position: 'absolute',
          top: '-5vh',
          left: star.left,
          width: '2px',
          height: '40px',
          background: 'linear-gradient(180deg, yellow, rgba(255,255,255,0))',
          borderRadius: '2px',
          transform: 'rotate(-15deg)',
          opacity: 0.7,
        }}
        animate={{
          y: ['0vh', '40vh'],
          opacity: [0.7, 0.9, 0],
        }}
        transition={{
          duration: Math.random() * 2 + 2,
          repeat: Infinity,
          delay: star.delay,
        }}
      />
    ))}
  </div>
)

export default StarsBackground