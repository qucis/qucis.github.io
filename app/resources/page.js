import Background from '@/components/Background'
import React from 'react'

const Resources = () => {
  return (
    <div>
      <Background>
        {/* The outer div will have no margin to preserve the background */}
        <div className='w-full h-[100vh] flex items-center justify-center text-center font-black text-white text-lg'>
          {/* Add margin-top only to this inner div to separate content */}
          <div className="mt-28">
            <p>We are looking for PhD students in the upcoming July'25 admission cycle.
            <br />
            Interested candidates, for more information regarding eligibility and application procedures please
            see
            <a href="https://www.iiserb.ac.in/doaa/admission" target="_blank" rel="noopener noreferrer">
              <span className='text-blue-500 text-md font-bj px-1 inline'>DOAA admission IISER Bhopal</span>
            </a>
            <img 
              src="/career/phd-opening.png" 
              alt="" 
              className="w-[400px] h-[auto] mt-4 mx-auto"
            />
            </p>
          </div>
        </div>
      </Background>
    </div>
  )
}

export default Resources
