"use client"
import React from 'react'
import '@/styles/preloader.scss'
import { motion } from 'framer-motion'

const Preloader = () => {
  return (


      <motion.div className="preloader"
      initial={{y: 0,opacity: 1}}
      animate={{y: 100,opacity: 0}}
      transition={{duration: 3}}
      >
        <div className="text-white font-black texts-container">
          Qucis
        </div>
      </motion.div>

  )
}

export default Preloader
