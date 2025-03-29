import React from 'react'
// import GalleryGrid from '@/components/GalleryGrid'
import dynamic from 'next/dynamic'
import Background from '@/components/Background'
import Transition from '@/components/Transition'

const QCMC = dynamic(() => import('@/components/QCMCphotos'), { ssr: false })
const IISCFujitsu = dynamic(() => import('@/components/IISCFujitsuphotos'), { ssr: false })

const Gallery = () => {
  return (
    <div>
      <Background>
    <div className='min-h-screen w-full h-full py-24 text-white text-4xl '>
      <Transition>
        <div className='grid place-items-center justify-center'>
        <h1 className=' mt-24 teamHeading text-[48px] md:text-[64px] text-white drop-shadow-lg'>
              IISC-Fujitsu Workshop at Bangalore
              </h1>
            <IISCFujitsu />
            <h1 className=' mt-24 teamHeading text-[48px] md:text-[64px] drop-shadow-lg'>
              QCMC 2024 at IIT Madras
              </h1>
            <QCMC />
            </div>
      </Transition>
    </div>
      </Background>
    </div>
  )
}

export default Gallery
