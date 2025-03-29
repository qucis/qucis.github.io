"use client"
import React from 'react'
import { BarLoader } from 'react-spinners'


const Spinner = () => {
  return (
    <div className='bg-[url(/figmaStuffs/mainBg.png)] bg-cover w-full h-[100vh] grid place-items-center justify-center'>
      <BarLoader color='#ffffff' />
      {/* <Planets
      background={"#640093"}
      color={"#ffffff"}

      /> */}


    </div>
  )
}

export default Spinner
