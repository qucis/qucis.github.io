import React from 'react'
import PageHeader from '@/components/common/PageHeader'
import SectionHeading from '@/components/common/SectionHeading'
import {
  conferenceProceedings,
  journalPublications,
  posters,
  preprints,
} from '@/data/publications'

const PublicationSection = ({ title, items }) => {
  return (
    <div className="mb-16">
      <SectionHeading className="mb-6">{title}</SectionHeading>
      <ol className="flex flex-col gap-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="bg-white/70 backdrop-blur-sm border border-cyan-100 rounded-xl px-5 py-4 shadow-sm font-asans text-slate-700 text-sm md:text-base leading-relaxed hover:border-cyan-300 transition-colors"
          >
            <span className="font-semibold text-cyan-600 mr-2">[{item.id}]</span>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noreferrer" className="hover:text-cyan-700 hover:underline">
                {item.title}
              </a>
            ) : (
              item.title
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

const Publications = () => {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <PageHeader label="Research Output" title="Publications" />

        <PublicationSection title="Journal Publications" items={journalPublications} />
        <PublicationSection title="Conference Proceedings" items={conferenceProceedings} />
        <PublicationSection title="Pre-prints" items={preprints} />
        <PublicationSection title="Posters" items={posters} />
      </div>
    </div>
  )
}

export default Publications
