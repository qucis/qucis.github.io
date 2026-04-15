import React from 'react'

const SectionHeading = ({ children, className = '' }) => {
  return (
    <h2 className={`font-unbounded font-bold text-2xl md:text-3xl text-slate-800 border-l-4 border-cyan-500 pl-4 ${className}`}>
      {children}
    </h2>
  )
}

export default SectionHeading
