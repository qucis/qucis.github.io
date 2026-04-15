import React from 'react'
import PageHeader from '@/components/common/PageHeader'
import { fundingSources } from '@/data/funding'

const FundingPage = () => {
  return (
    <div className="w-full min-h-screen px-6 pt-32 pb-24 max-w-5xl mx-auto">
      <PageHeader
        label="Grants & Support"
        title="Our Funding"
        description="We are grateful to receive research funding and support from these organisations."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        {fundingSources.map((fund) => (
          <div
            key={fund.id}
            className="flex items-center justify-center flex-col gap-5 p-6 bg-white/70 backdrop-blur-sm border border-cyan-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all w-full"
          >
            <div className="border border-cyan-100 p-3 rounded-full bg-white shadow grid place-items-center">
              <img
                src={fund.img}
                alt={fund.title}
                className="rounded-full aspect-square object-contain w-[130px] h-[130px] md:w-[180px] md:h-[180px]"
              />
            </div>
            <h2 className="text-slate-800 text-lg md:text-xl text-center font-bold font-unbounded hover:text-cyan-600 cursor-pointer transition-colors">
              {fund.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FundingPage
