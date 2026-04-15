'use client'

import React, { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageHeader from '@/components/common/PageHeader'
import SectionHeading from '@/components/common/SectionHeading'
import MemberCard from '@/components/team/MemberCard'
import { alumniMembers, alumniYears, currentMembers } from '@/data/team'

const Team = () => {
  const [expandedImg, setExpandedImg] = useState(null)
  const [selectedYear, setSelectedYear] = useState('All')

  const filteredAlumni = useMemo(() => {
    return selectedYear === 'All' ? alumniMembers : alumniMembers.filter((alumnus) => alumnus.year === selectedYear)
  }, [selectedYear])

  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <PageHeader label="Our People" title="Meet the Team" titleClassName="text-4xl md:text-6xl" />

        <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-24 bg-white/70 backdrop-blur-sm border border-cyan-100 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="md:w-[55%]">
            <span className="text-[11px] font-semibold tracking-widest text-cyan-500 uppercase">Principal Investigator</span>
            <h2 className="font-unbounded font-bold text-2xl md:text-4xl text-slate-900 mt-2">Dr. Ankur Raina</h2>
            <p className="mt-6 font-asans text-slate-700 text-base md:text-lg leading-relaxed">
              <strong>Dr. Ankur Raina</strong> works as an Assistant Professor in the Department of EECS, IISER Bhopal. Before
              joining IISER Bhopal, he worked as a researcher/scientist at the Department of Electrical and Computer
              Engineering, University of Arizona with Prof. Bane Vasic. His research interests include classical and quantum
              information theory and coding, quantum optics, quantum cryptography, quantum algorithms, and fault-tolerant
              quantum computation.
              <br />
              <br />
              Dr. Raina obtained his PhD from the PNSIL Group of the Department of Electronic Systems Engineering at the
              Indian Institute of Science, Bengaluru under the supervision of Prof. Shayan Srinivasa Garani.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src="/members/pi/ankur.png"
              onClick={() => setExpandedImg('/members/pi/ankur.png')}
              className="w-[320px] md:w-[380px] rounded-2xl shadow-xl border-2 border-cyan-100 cursor-zoom-in hover:scale-[1.02] transition-transform duration-300"
              alt="Dr. Ankur Raina"
            />
          </div>
        </div>

        <SectionHeading className="mb-10">Current Members</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {currentMembers.map((member) => (
            <MemberCard member={member} key={member.id} onZoom={() => setExpandedImg(member.img)} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-l-4 border-cyan-500 pl-4">
          <h2 className="font-unbounded font-bold text-2xl md:text-3xl text-slate-800">Alumni</h2>

          <div className="flex bg-white/50 backdrop-blur-sm p-1 rounded-xl border border-cyan-100 w-fit">
            {alumniYears.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-1.5 rounded-lg font-unbounded text-[10px] md:text-xs transition-all duration-300 ${
                  selectedYear === year
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-200'
                    : 'text-slate-500 hover:text-cyan-600'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredAlumni.map((alumnus, index) => (
              <motion.div
                key={alumnus.id || index}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <MemberCard member={alumnus} onZoom={() => setExpandedImg(alumnus.img)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {expandedImg ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh]"
            >
              <img src={expandedImg} className="w-full h-full object-contain rounded-lg shadow-2xl" alt="Zoomed Member" />
              <button
                onClick={(event) => {
                  event.stopPropagation()
                  setExpandedImg(null)
                }}
                className="absolute -top-4 -right-4 bg-white text-slate-900 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-500 hover:text-white transition-colors text-xl font-bold"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default Team
