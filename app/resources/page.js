import React from 'react'

const Resources = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center pt-32 px-6 pb-24'>
      <div className="max-w-3xl mx-auto text-center">

        <span className="text-[12px] font-semibold tracking-[0.2em] text-cyan-600 uppercase">Join Us</span>
        <h1 className="font-unbounded font-bold text-4xl md:text-5xl text-slate-900 mt-4 mb-8">Career & Opportunities</h1>

        <div className="bg-white/70 backdrop-blur-sm border border-cyan-100 rounded-2xl p-8 shadow-sm text-left">
          <p className="font-asans text-slate-700 text-base md:text-lg leading-relaxed">
            We are looking for <strong className="text-cyan-700">PhD students</strong> in the upcoming July &apos;25 admission cycle.
            <br /><br />
            Interested candidates — for more information regarding eligibility and application procedures, please see:
          </p>
          <a href="https://www.iiserb.ac.in/doaa/admission" target="_blank" rel="noopener noreferrer"
            className="inline-block mt-4 text-cyan-600 font-semibold font-asans hover:underline text-base">
            DOAA Admission — IISER Bhopal →
          </a>

          <div className="mt-8 flex justify-center">
            <img src="/career/phd-opening.png" alt="PhD Opening" className="max-w-[420px] w-full rounded-xl shadow-md border border-cyan-100" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources

