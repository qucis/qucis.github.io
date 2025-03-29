import React from 'react'

const Background = ({children}) => {
  return (
    <>
      <div className={`bg-gradient-to-br from-purple-800 to-violet-950 min-h-screen w-full`}>
        <div className='absolute w-[400px] h-[400px] bg-purple-400 rounded-full blur-[180px]'></div>
        {children}
      </div>
    </>
  )
}

export default Background
