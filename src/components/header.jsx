import React from 'react'
import { motion } from 'framer-motion'
import './compStyles/head.css'
import { div } from 'framer-motion/client'
export default function header() {
  return (
    <div className='keep'>
    <div className ="frosted-flex">
      <a href="app.jsx">Home</a>
      <a href="app.jsx">About</a>
      <a href="app.jsx">Contact</a>
    </div>
    </div>
  )
}
