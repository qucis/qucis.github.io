import React from 'react'

const PageHeader = ({ label, title, description, titleClassName = 'text-4xl md:text-5xl', showDivider = true }) => {
  return (
    <div className="text-center mb-16">
      {label ? (
        <span className="text-[12px] font-semibold tracking-[0.2em] text-cyan-600 uppercase">{label}</span>
      ) : null}
      <h1 className={`font-unbounded font-bold ${titleClassName} text-slate-900 mt-4`}>{title}</h1>
      {showDivider ? <div className="mt-4 h-1 w-16 bg-gradient-to-r from-cyan-500 to-teal-400 mx-auto rounded-full"></div> : null}
      {description ? <p className="font-asans text-slate-500 mt-4 text-base max-w-xl mx-auto">{description}</p> : null}
    </div>
  )
}

export default PageHeader
