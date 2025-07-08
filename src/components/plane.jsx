import React from 'react'
import {motion} from 'framer-motion'

const plane = () => {
  return (
    <div>
      <motion.div className='plane'
                animate={{
                  x:[500,510],
                  y:[-10,10]
                }}
                transition={{
                  duration: 3,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse'
                  
                }}>
                  
                <img src="./plane-br.png" alt="noimg" height={130}/>
              </motion.div>
    </div>
  )
}

export default plane
