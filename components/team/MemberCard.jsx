'use client'

import { useState } from 'react'

const MemberCard = ({ member, onZoom }) => {
  const [imgError, setImgError] = useState(false)
  const initials = member.name
    .split(' ')
    .map((namePart) => namePart[0])
    .join('')
    .toUpperCase()
    .substring(0, 2)

  return (
    <div className="flex gap-5 bg-white/70 backdrop-blur-sm border border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all items-start">
      {imgError ? (
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-200 flex items-center justify-center flex-shrink-0 text-cyan-600 font-unbounded font-bold text-xl shadow-inner">
          {initials}
        </div>
      ) : (
        <img
          src={member.img}
          onError={() => setImgError(true)}
          onClick={onZoom}
          className="w-16 h-16 rounded-xl object-cover flex-shrink-0 border border-cyan-500/20 shadow-sm cursor-zoom-in hover:brightness-110 transition-all"
          alt={member.name}
        />
      )}
      <div>
        <div className="flex justify-between items-start">
          <h3 className="font-unbounded font-bold text-slate-900 text-base">{member.name}</h3>
          {member.year ? (
            <span className="text-[10px] font-bold text-cyan-600/60 font-unbounded bg-cyan-50 px-2 py-0.5 rounded-full">{member.year}</span>
          ) : null}
        </div>
        {member.position ? <p className="text-cyan-600 font-asans text-sm font-medium mt-0.5">{member.position}</p> : null}
        <p className="font-asans text-slate-600 text-sm leading-relaxed mt-2 line-clamp-4">{member.bio}</p>
      </div>
    </div>
  )
}

export default MemberCard
