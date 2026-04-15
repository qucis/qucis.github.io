import React from 'react'

const Background = ({children}) => {
  return (
    <>
      <div className="min-h-screen w-full bg-transparent">
        {children}
      </div>
    </>
  )
}

export default Background
