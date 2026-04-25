// React import removed as it's not directly used

import type { ShowcaseItem } from '../types';

export const showcaseItems: ShowcaseItem[] = [
  {
    id: 'eecs-symposium',
    date: 'March 2026',
    title: 'EECS Symposium 2026',
    shortDesc: 'Our QuCIS Lab participated in the EECS Research Symposium 2026 at IISER Bhopal, featuring award-winning oral and poster presentations.',
    fullDesc: (
      <div className="space-y-5">
        <p>
          Our QuCIS Lab had a wonderful time participating in the EECS Research Symposium 2026 held at IISER Bhopal on March 11–12, 2026. It was an exciting opportunity for our group to share our research, exchange ideas, and engage with the vibrant research community.
        </p>
        <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100/50">
          <h4 className="font-unbounded font-semibold text-slate-800 text-sm mb-3">Oral Presentations</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Harsh Gupta</strong> – Fault-tolerant syndrome extraction in [[n,1,3]] graph codes</li>
            <li><strong>Mainak Bhattacharyya</strong> – Overhead Estimation of Fault Tolerant Protocols from Logical Gates 🏆 <span className="text-cyan-700 font-semibold">(3rd Prize)</span></li>
            <li><strong>Ritik Jain</strong> – Quantum Key Distribution</li>
            <li><strong>Ronit Raj</strong> – Evolutionary Quantum Architecture Search for Expressible Circuits 🏆 <span className="text-cyan-700 font-semibold">(1st Prize)</span></li>
          </ul>
        </div>
        <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100/50">
          <h4 className="font-unbounded font-semibold text-slate-800 text-sm mb-3">Poster Presentation</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Suprabhat Sinha</strong> – Effect of quantum information scrambling on bound entangled states</li>
          </ul>
        </div>
        <p>
          We are especially proud that <strong>Ronit Raj</strong> received the 1st prize and <strong>Mainak Bhattacharyya</strong> received the 3rd prize in the oral presentation category! Overall, it was a fantastic experience representing QuCIS, discussing our work with fellow researchers, and celebrating the spirit of scientific curiosity and collaboration.
        </p>
      </div>
    ),
    images: [
      '/images/events/eecs_symposium_2026_2_full.webp',
      '/images/events/eecs_symposium_2026_3.webp',
      '/images/events/eecs_symposium_2026_4.webp',
      '/images/events/eecs_symposium_2026_5.webp',
      '/images/events/eecs_symposium_2026_6.webp',
      '/images/events/eecs_symposium_2026_7.webp',
      '/images/events/eecs_symposium_2026_8.webp'
    ]
  },
  {
    id: 'iisc-prof',
    date: 'February 2026',
    title: 'Visit by Prof. Shayan Srinivasa Garani & Ujjain Trip',
    shortDesc: 'Hosted Prof. Shayan Srinivasa Garani (IISc) for a research talk, followed by a cultural visit to Ujjain.',
    fullDesc: (
      <div className="space-y-4">
        <p>
          In February 2026, our lab had the privilege of hosting Prof. Shayan Garani for a research talk. Beyond the academic discussions, we took a short but memorable trip to Ujjain, exploring its rich cultural and spiritual heritage.
        </p>
      </div>
    ),
    images: [
      '/images/events/iisc_prof_1_full.webp',
      '/images/events/iisc_prof_2_full.webp',
      '/images/events/iisc_prof_3_full.webp',
      '/images/events/iisc_prof_4_full.webp'
    ]
  },
  {
    id: 'igstc-fellowship-2025',
    date: 'Aug 2025 - Dec 2025',
    title: 'Mainak Bhattacharyya - IGSTC Industrial Fellowship',
    shortDesc: 'Selected for the Indo-German Science & Technology Centre industrial fellowship and spent four months in Germany at QC Design.',
    fullDesc: (
      <div className="space-y-4">
        <p>
          Mainak Bhattacharyya, a PhD researcher at IISER Bhopal, received the{' '}
          <a href="https://www.igstc.org/home/about_us" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline font-medium">
            IGSTC Industrial Exposure Fellowship 2025
          </a>
          .
        </p>
        <p>
          His work focuses on fault tolerance in quantum computing, especially improving reliability of quantum hardware.
          He studies low-overhead decoders for QLDPC codes, quantum simulations, and scalable fault-tolerant architectures.
          As part of the fellowship, he joined{' '}
          <a href="https://www.qc.design/" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline font-medium">
            QC Design
          </a>{' '}
          in Germany as a visiting researcher.
        </p>
        <p>
          The company builds software tools for designing optimized and error-resilient quantum systems.
          Quantum computing shows strong potential but suffers from complex error mechanisms that reduce performance.
          Mainak&apos;s work addresses this by developing resource estimation frameworks for fault-tolerant quantum protocols.
          He designed hardware-native, error-protected logical gates using surface codes.
          His framework evaluates the cost of maintaining error protection across different quantum platforms.
          These methods were tested under realistic noise models using advanced simulation tools.
          The results can significantly impact future quantum hardware design and optimization.
        </p>
        <p>
          Outside research, he experienced life in Ulm, known as the birthplace of Albert Einstein.
          He participated in the Einstein City Marathon and explored cultural regions like Baden-Württemberg and Bavaria.
          Overall, his journey combines cutting-edge research with rich international and cultural exposure.
        </p>
      </div>
    ),
    images: [
      '/images/events/maink_germany_1.webp',
      '/images/events/mainak_germany_2.webp',
      '/images/events/mainak_germany_3.webp',
      '/images/events/mainak_germany_4.webp'
    ],
  },
  {
    id: 'nptel-2025',
    date: 'June 2025',
    title: 'NPTEL Workshop: Hands-on Quantum Computing (2nd Edition)',
    shortDesc: 'Organized the 2nd edition of the NPTEL Hands-on Quantum Computing Workshop at IISER Bhopal, expanding the curriculum and cloud simulation platform.',
    fullDesc: (
      <div className="space-y-4">
        <p>
          The QuCIS lab led sessions at the NPTEL Workshop on Hands-on Programming for Quantum Computers. We delivered comprehensive lectures on core quantum algorithms using PennyLane and implemented a custom cloud server API for participants to perform real-time simulations.
        </p>
      </div>
    ),
    images: [
      '/images/events/nptel_2025_1_full.webp',
      '/images/events/nptel_2025_2_full.webp'
    ]
  },
  {
    id: 'iisc-fujitsu',
    date: 'December 2024',
    title: 'IISc Fujitsu Quantum Computing Workshop',
    shortDesc: 'Presented a lightning talk on fault-tolerant non-CSS codes at this collaborative event.',
    fullDesc: (
      <div className="space-y-4">
        <p>
          Members of the QuCIS lab participated in the IISc Fujitsu Quantum Computing Workshop, a collaborative event focused on the latest advancements in quantum hardware and software. Harsh Gupta and Mainak Bhattacharyya presented a Lightning Talk titled: "Fault-tolerance of [[6, 1, 3]] non-CSS code family generated using measurements on graph states". It was a pleasure to engage with experts from both academia and industry.
        </p>
      </div>
    ),
    link: 'https://mllab.csa.iisc.ac.in/fqc/talks.html#harsh_lightning',
    linkText: 'View Official Abstract →',
    images: [
      '/images/events/iisc_fujitsu_3_full.webp',
      '/images/events/iisc_fujitsu_4_full.webp',
      '/images/events/iisc_fujitsu_2_full.webp',
      '/images/events/iisc_fujitsu_5_full.webp'
    ]
  },
  {
    id: 'nptel-2024',
    date: 'June 2024',
    title: 'NPTEL Workshop: Hands-on Quantum Computing (Inaugural Edition)',
    shortDesc: 'Organized a 5-day intensive workshop at IISER Bhopal, leading sessions on quantum algorithms using PennyLane.',
    fullDesc: (
      <div className="space-y-4">
        <p>
          The QuCIS lab organized the inaugural 5-day intensive workshop at IISER Bhopal. We led the sessions on quantum algorithms using PennyLane and co-implemented a cloud API for participant materials and simulations.
        </p>
      </div>
    ),
    images: [
      '/images/events/nptel_2024_2_full.webp',
      '/images/events/nptel_2024_3_full.webp',
      '/images/events/nptel_2024_4_full.webp',
      '/images/events/nptel_2024_5_full.webp',
      '/images/events/nptel_2024_6_full.webp'
    ]
  }
];
