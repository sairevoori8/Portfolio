import React from 'react'
import { motion } from 'framer-motion'

const NUM_GLOWING_STARS = 25

// Generate random positions for glowing stars
const glowingStars = Array.from({ length: NUM_GLOWING_STARS }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 2 + 1}px`,
  glow: Math.random() * 0.9 + 0.3,
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
  </div>
)

export default StarsBackground