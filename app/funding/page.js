import React from 'react'
import Image from 'next/image'
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
            <figure className="border border-cyan-100 p-3 rounded-xl bg-white shadow grid place-items-center w-[110px] h-[110px] md:w-[130px] md:h-[130px]">
              <Image
                src={fund.img}
                alt={fund.title}
                width={96}
                height={96}
                className="aspect-square object-contain w-[96px] h-[96px] md:w-[112px] md:h-[112px]"
              />
            </figure>
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
