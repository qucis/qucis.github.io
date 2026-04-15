import React from 'react'

const page = () => {

    const funds = [
        { id: 1, img: '/funding/nqm.jpg', title: 'National Quantum Mission, India' },
        { id: 2, img: '/funding/indous.jpg', title: 'United States - India Science & Technology Endowment Fund' },
        { id: 3, img: '/funding/meity-removebg.png', title: 'MeitY AWS QCAL Grant' },
        { id: 4, img: '/funding/logo.png', title: 'IISERB Startup Grant' },
        { id: 5, img: '/funding/ihub.png', title: 'i-HUB, IISER Pune Fellowship' },
    ]

  return (
    <div className="w-full min-h-screen px-6 pt-32 pb-24 max-w-5xl mx-auto">
      <div className="mb-16 text-center">
        <span className="text-[12px] font-semibold tracking-[0.2em] text-cyan-600 uppercase">Grants & Support</span>
        <h1 className="font-unbounded font-bold text-4xl md:text-5xl text-slate-900 mt-4">Our Funding</h1>
        <p className="font-asans text-slate-500 mt-4 text-base max-w-xl mx-auto">We are grateful to receive research funding and support from these organisations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        {funds.map((fund) => (
          <div key={fund.id} className="flex items-center justify-center flex-col gap-5 p-6 bg-white/70 backdrop-blur-sm border border-cyan-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all w-full">
            <div className="border border-cyan-100 p-3 rounded-full bg-white shadow grid place-items-center">
              <img src={fund.img} alt={fund.title} className="rounded-full aspect-square object-contain w-[130px] h-[130px] md:w-[180px] md:h-[180px]" />
            </div>
            <h2 className="text-slate-800 text-lg md:text-xl text-center font-bold font-unbounded hover:text-cyan-600 cursor-pointer transition-colors">{fund.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page

