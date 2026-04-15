import React from 'react'

const About = () => {
  return (
    <div className='w-full min-h-screen pt-32 pb-24 px-6'>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[12px] font-semibold tracking-[0.2em] text-cyan-600 uppercase">Who We Are</span>
          <h1 className="font-unbounded font-extrabold text-4xl md:text-6xl text-slate-900 mt-4 leading-[1.15]">
            Quantum Computing &amp;<br />Information Systems
          </h1>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-cyan-500 to-teal-400 mx-auto rounded-full"></div>
        </div>

        {/* Content Card */}
        <div className="bg-white/70 backdrop-blur-sm border border-cyan-100 rounded-2xl p-8 md:p-12 shadow-sm space-y-6">
          <p className="font-asans text-slate-700 text-base md:text-lg leading-relaxed">
            Welcome to the <strong className="text-cyan-700">Quantum Computing and Information Systems (QuCIS) Lab!</strong> At QuCIS, 
            we are dedicated to pushing the boundaries of quantum information and exploring 
            the frontiers of quantum computation. Our research delves into the most cutting-edge 
            aspects of this transformative field — from quantum error correction and quantum algorithms 
            to quantum networks and distributed quantum architectures.
          </p>
          <p className="font-asans text-slate-700 text-base md:text-lg leading-relaxed">
            We are driven by a singular vision: to harness the power of quantum computing for the betterment of mankind. 
            Through innovative research, collaboration, and a deep commitment to advancing quantum technologies, 
            we aim to unlock new possibilities that can revolutionize industries, enhance global problem-solving, and improve lives.
          </p>
          <p className="font-asans text-slate-700 text-base md:text-lg leading-relaxed">
            We would love to hear from you if you share our vision. 
            Join us as we embark on the road toward shaping the future of quantum information science!
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[
            { label: 'Research Areas', value: '5+' },
            { label: 'Publications', value: '20+' },
            { label: 'Team Members', value: '10+' },
            { label: 'Funding Sources', value: '5' },
          ].map((s, i) => (
            <div key={i} className="bg-white/70 border border-cyan-100 rounded-2xl p-6 text-center shadow-sm">
              <div className="font-unbounded font-bold text-3xl text-cyan-600">{s.value}</div>
              <div className="font-asans text-slate-500 text-sm mt-2">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default About
