import React from 'react'
import dynamic from 'next/dynamic'
import PageHeader from '@/components/common/PageHeader'
import SectionHeading from '@/components/common/SectionHeading'

const QCMC = dynamic(() => import('@/components/QCMCphotos'), { ssr: false })
const IISCFujitsu = dynamic(() => import('@/components/IISCFujitsuphotos'), { ssr: false })

const Gallery = () => {
  return (
    <div className="min-h-screen w-full py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <PageHeader label="Photo Gallery" title="Moments" showDivider={false} />

        <div className="flex flex-col gap-20">
          <div>
            <SectionHeading className="mb-8">IISC-Fujitsu Workshop, Bangalore</SectionHeading>
            <IISCFujitsu />
          </div>
          <div>
            <SectionHeading className="mb-8">QCMC 2024, IIT Madras</SectionHeading>
            <QCMC />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
