import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <BackgroundGradientAnimation>
        <div className='w-full min-h-screen flex justify-center items-center bg-cover'>
          <div className="w-full max-w-7xl text-white font-black text-center p-8 mt-12">
            <h1 className="text-5xl tracking-tight font-asans sm:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 drop-shadow-lg mb-10">
              Quantum Computing and Information Systems
              <br />
              QuCIS Lab
            </h1>
            <p className="text-lg sm:text-2xl font-light mt-12 tracking-tight leading-relaxed text-gray-200 drop-shadow-md">
              Welcome to the Quantum Computing and Information Systems (QuCIS) Lab! At QuCIS, 
              we are dedicated to pushing the boundaries of quantum information and exploring 
              the frontiers of quantum computation. Our research delves into the most cutting-edge 
              aspects of this transformative field, from quantum error correction, quantum algorithms to
              quantum networks and distributed quantum architectures. We are driven by a singular vision to harness the power of 
              quantum computing for the betterment of mankind. 
              Through innovative research, collaboration, 
              and a deep commitment to advancing quantum technologies, we aim to unlock new possibilities that 
              can revolutionize industries, enhance global problem solving, and improve lives.
            </p>
            <p className="mt-4 text-lg sm:text-2xl font-light tracking-tight leading-relaxed text-gray-200 drop-shadow-md">
              We would very much love to hear from you if you are also interested in our vision. 
              Join us as we embark on the road toward shaping the future of quantum information science!
            </p>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  )
}

export default About
