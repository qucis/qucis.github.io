import React from 'react'
import { latestUpdates } from '@/data/latestUpdates'

const LatestUpdates = () => {
  return (
    <div className="w-full pb-24 px-6 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto mb-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cyan-200" />
          <span className="text-[12px] font-semibold tracking-[0.2em] text-cyan-500 uppercase">Archive of Progress</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-cyan-200" />
        </div>
        <h2 className="font-unbounded font-bold text-3xl md:text-5xl text-slate-900 text-center mb-4">Latest Lab Updates</h2>
        <p className="font-asans text-slate-500 text-center text-base md:text-lg mt-3 max-w-2xl mx-auto">
          Recent achievements, events, and news from the QuCIS laboratory.
        </p>
      </div>

      <div className="w-full max-w-4xl space-y-8">
        {latestUpdates.map((update, index) => (
          <div
            key={index}
            className="group relative bg-white/60 backdrop-blur-md border border-cyan-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="flex-shrink-0">
              <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-unbounded font-bold text-xs uppercase tracking-wider">
                {update.date}
              </span>
            </div>
            <div className="flex-grow">
              <p className="font-asans text-slate-700 text-lg leading-relaxed">{update.text}</p>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestUpdates
