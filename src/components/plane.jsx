import React from 'react'
import {motion} from 'framer-motion'

const plane = () => {
  return (
    <div>
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
  )
}

export default plane
