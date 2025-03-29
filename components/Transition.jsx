'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'


export default function Transition({children}){
    return(
        <motion.div
            initial={{y:50, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{type: "spring", stiffness: 100, duration: 1}}
        >
            {children}
        </motion.div>
    )
}