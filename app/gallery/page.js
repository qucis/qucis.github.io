import React from 'react'
import PageHeader from '@/components/common/PageHeader'
import SectionHeading from '@/components/common/SectionHeading'

const Gallery = () => {
  return (
    <div className="min-h-screen w-full py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <PageHeader label="Student Work Showcase" title="Student Showcase" showDivider={false} />

        <div className="flex flex-col gap-12">
          <div>
            <SectionHeading className="mb-6">
              Participated in the IISc–Fujitsu Quantum Computing Workshop.
            </SectionHeading>
            <div className="space-y-6 font-asans text-slate-700 leading-relaxed">
              <p>
                Harsh Gupta demonstrated bare-ancilla fault tolerance for a rate-optimized [[6,1,3]]
                non-CSS code using non-planar graph state constructions, enabling extension to a
                scalable code family.
              </p>
              <p>
                Mainak Bhattacharyya improved QLDPC decoding by combining iterative message passing
                with check node removal, introducing qubit separation to mitigate degeneracy-induced
                failures.
              </p>
              <div>
                <a
                  href="https://mllab.csa.iisc.ac.in/fqc/talks.html#harsh_lightning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
                >
                  View Official Abstract →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
