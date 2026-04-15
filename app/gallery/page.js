import React from 'react'
import dynamic from 'next/dynamic'

const QCMC = dynamic(() => import('@/components/QCMCphotos'), { ssr: false })
const IISCFujitsu = dynamic(() => import('@/components/IISCFujitsuphotos'), { ssr: false })

const Gallery = () => {
  return (
    <div className='min-h-screen w-full py-32 px-6'>
      <div className='max-w-5xl mx-auto'>
        <div className="text-center mb-16">
          <span className="text-[12px] font-semibold tracking-[0.2em] text-cyan-600 uppercase">Photo Gallery</span>
          <h1 className='font-unbounded font-bold text-4xl md:text-5xl text-slate-900 mt-4'>Moments</h1>
        </div>

        <div className='flex flex-col gap-20'>
          <div>
            <h2 className='font-unbounded font-bold text-2xl md:text-3xl text-slate-800 mb-8 border-l-4 border-cyan-500 pl-4'>
              IISC-Fujitsu Workshop, Bangalore
            </h2>
            <IISCFujitsu />
          </div>
          <div>
            <h2 className='font-unbounded font-bold text-2xl md:text-3xl text-slate-800 mb-8 border-l-4 border-cyan-500 pl-4'>
              QCMC 2024, IIT Madras
            </h2>
            <QCMC />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery

