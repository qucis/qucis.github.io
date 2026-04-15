import React from 'react'
import PageHeader from '@/components/common/PageHeader'

const labStats = [
  { label: 'Research Areas', value: '5+' },
  { label: 'Publications', value: '20+' },
  { label: 'Team Members', value: '10+' },
  { label: 'Funding Sources', value: '5' },
]

const About = () => {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          label="Who We Are"
          title={
            <>
              <span className="text-cyan-600">Qu</span>antum <span className="text-cyan-600">C</span>omputing &amp;
              <br />
              <span className="text-cyan-600">I</span>nformation <span className="text-cyan-600">S</span>ystems
            </>
          }
          titleClassName="text-4xl md:text-6xl font-extrabold leading-[1.15]"
        />

        <div className="bg-white/70 backdrop-blur-sm border border-cyan-100 rounded-2xl p-8 md:p-12 shadow-sm space-y-6">
          <p className="font-asans text-slate-700 text-base md:text-lg leading-relaxed">
            Welcome to the{' '}
            <strong className="text-cyan-700">
              <span className="text-cyan-600">Qu</span>antum <span className="text-cyan-600">C</span>omputing and{' '}
              <span className="text-cyan-600">I</span>nformation <span className="text-cyan-600">S</span>ystems (QuCIS) Lab!
            </strong>{' '}
            At QuCIS, we are dedicated to pushing the boundaries of quantum information and exploring the frontiers of quantum
            computation. Our research delves into the most cutting-edge aspects of this transformative field — from quantum
            error correction and quantum algorithms to quantum networks and distributed quantum architectures.
          </p>
          <p className="font-asans text-slate-700 text-base md:text-lg leading-relaxed">
            We are driven by a singular vision: to harness the power of quantum computing for the betterment of mankind.
            Through innovative research, collaboration, and a deep commitment to advancing quantum technologies, we aim to
            unlock new possibilities that can revolutionize industries, enhance global problem-solving, and improve lives.
          </p>
          <p className="font-asans text-slate-700 text-base md:text-lg leading-relaxed">
            We would love to hear from you if you share our vision. Join us as we embark on the road toward shaping the future
            of quantum information science!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {labStats.map((stat, index) => (
            <div key={index} className="bg-white/70 border border-cyan-100 rounded-2xl p-6 text-center shadow-sm">
              <div className="font-unbounded font-bold text-3xl text-cyan-600">{stat.value}</div>
              <div className="font-asans text-slate-500 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
