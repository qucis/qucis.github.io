import React from 'react'

const Publications = () => {
    const journals = [
        { id: 1, title: 'A. V. Kulkarni, V. Tiwari, A. Sharma, A. Raina, "Photonic Simulation of Localization Phenomena Using Boson Sampling" (Accepted in Phys.Rev. A 2025)', link: 'https://arxiv.org/abs/2410.13938' },
        { id: 2, title: 'N. Rengaswamy, N. Raveendran, A. Raina, B. Vasic, "Entanglement Purification with Quantum LDPC Codes and Iterative Decoding", Quantum 8, vol.8, p. 1233, 2024.', link: 'https://quantum-journal.org/papers/q-2024-01-24-1233/' },
        { id: 3, title: 'A. Ahmed, A. Nelson, A. Raina and A. Sharma, "Phase classification in the long-range Harper model using machine learning", Phys. Rev. B 108, 155128, 2023.', link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.108.155128' },
        { id: 4, title: 'S. S. Garani, P. J. Nadkarni, and A. Raina, "Theory behind Quantum Error Correcting Codes: An Overview", J Indian Inst Sci 103, 449–495 (2023).', link: 'https://link.springer.com/article/10.1007/s41745-023-00392-7' },
        { id: 5, title: 'N. Raveendran, N. Rengaswamy, F. Rozpędek, A. Raina, L. Jiang, and B. Vasić, "Finite Rate QLDPC-GKP Coding Scheme that Surpasses the CSS Hamming Bound", Quantum, vol. 6, pp. 767, July 2022.', link: 'https://quantum-journal.org/papers/q-2022-07-20-767/' },
        { id: 6, title: 'P. J. Nadkarni, A. Raina and S. S. Garani, "Modified graph state codes for single node recovery in quantum distributed storage." Physical Review A, vol. 102, no. 6, p. 062430, Dec. 2020.', link: 'https://journals.aps.org/pra/abstract/10.1103/PhysRevA.102.062430' },
        { id: 7, title: 'A. Raina, and S. S. Garani, "Quantum channels over graph states using generalized measurement-based quantum computation framework", Quantum Info. Proc. vol. 19, article 94, Feb. 2020.', link: 'https://link.springer.com/article/10.1007/s11128-020-2597-7' },
        { id: 8, title: 'A. Raina, P. J. Nadkarni, and S. S. Garani, "Recovery of quantum information from a node failure in a graph", Quantum Info. Proc., vol. 19, article 70, Feb. 2020.', link: 'https://link.springer.com/article/10.1007/s11128-019-2564-3' },
        { id: 9, title: 'A. Raina and S. S. Garani, "Recovery from an eavesdropping attack on a qubit of a graph state", Quantum Info. Proc., vol. 18, no. 9, article 274, Sep. 2019.', link: 'https://link.springer.com/article/10.1007/s11128-019-2387-2' },
    ]
    const conferences = [
        { id: 1, title: 'S. Gupta, and A. Raina, "A feed-forward method for encoding a stabilizer code using Measurement-based Quantum Computing", QADA Workshop at IEEE QCE, Montréal, Sep 2024.', link: '' },
        { id: 2, title: 'P. Maheshwari and A. Raina, "Fault-tolerance of the [[8,1,3]] non-CSS code", QuIK workshop at IEEE ISIT, Athens, July 2024.', link: '' },
        { id: 3, title: 'S. K. Sahoo, A. Raina, and S. S. Garani, "Purification and Fidelity Enhancement from Quantum Mixedness", IEEE QCNC 2024, Kanazawa, Japan.', link: '' },
        { id: 4, title: 'N. Rengaswamy, A. Raina, N. Raveendran and B. Vasic, "Distilling GHZ States using Quantum LDPC codes", ISTC, Brest, France 2023.', link: '' },
        { id: 5, title: 'C. Pandey, S. Gupta, R. R. Das, A. Raina, "Quantum Network Coding and Distribution of Maximally Entangled States in MBQC", NCC, IIT Guwahati, Feb 2023.', link: '' },
        { id: 6, title: 'M. Bhattacharyya and A. Raina, "A quantum algorithm for syndrome decoding of classical error-correcting linear block codes", ACM/IEEE QCS Workshop, Seattle, December 2022.', link: '' },
        { id: 7, title: 'P. J. Nadkarni, A. Raina and S. S. Garani, "Recovery of distributed quantum information from a node failure using graph states", Quantum Workshop, IEEE GLOBECOM, Singapore, December 2017.', link: '' },
        { id: 8, title: 'A. Raina, P. J. Nadkarni and S. S. Garani, "Recovery of Distributed Quantum Information in Quantum Networks", Frontiers in Optics, Washington D.C., Sep. 2017.', link: '' },
        { id: 9, title: 'A Raina and S. S. Garani, "Multiparty Quantum Communication Using Hyperentangled States", Quantum Workshop, IEEE GLOBECOM, Washington D.C, December 2016.', link: '' },
        { id: 10, title: 'A Raina and S. G. Srinivasa, "Entanglement and its Role on the Capacity of Two-Pauli Channels", IEEE Workshop on Recent Advances in Photonics (WRAP), Bengaluru, December 2015.', link: '' },
        { id: 11, title: 'A. Raina and S. G. Srinivasa, "Eavesdropping on a Quantum Channel with a Unitarily Interacting Probe", Quantum Workshop, IEEE GLOBECOM, San Diego, December 2015.', link: '' },
        { id: 12, title: 'A. Raina and S. G. Srinivasa, "Quantum Teleportation Over Hyper Entangled States", Info. Theory and Applications Workshop (ITA), Feb. 2015.', link: '' },
        { id: 13, title: 'A. Raina and S. G. Srinivasa, "Quantum Communication Over Bit Flip Channels Using Entangled Bipartite and Tripartite States", 52nd Annual Allerton Conference, October 2014.', link: '' },
    ]
    const preprints = [
        { id: 1, title: 'H. Gupta, P. Maheshwari and A. Raina, "Fault-tolerance of [[6, 1, 3]] non-CSS code family generated using measurements on graph states"', link: '' },
        { id: 2, title: 'M. Bhattacharyya and A. Raina, "Decoding Quantum LDPC Codes using Collaborative Check Node Removal"', link: '' },
        { id: 3, title: 'S. Gupta, A. Raina, "An Architecture for Noise-Aware Distributed Quantum Computation"', link: '' },
        { id: 4, title: 'K. N. M. Sharma, C. de Valk, A. Raina, J. van Velzen, "Quantum state preparation for bell-shaped probability distributions using deconvolution methods"', link: '' },
        { id: 5, title: 'R. T. Kumar and A. Raina, "Generating probability distributions using variational quantum circuits"', link: '' },
        { id: 6, title: 'P. Srivastava, V. Katyal and A. Raina, "Encoder Circuit For Surface Code using Measurement-Based Quantum Computing Model"', link: '' },
        { id: 7, title: 'M. Bhattacharyya and A. Raina, "Quantum Approximation Optimization Algorithm for the trellis based Viterbi decoding of classical error correcting codes"', link: '' },
        { id: 8, title: 'N. Rengaswamy, A. Raina, N. Raveendran, B. Vasic, "Distilling GHZ States using Stabilizer Codes"', link: '' },
        { id: 9, title: 'S. Shaw, H. Gupta, S. M. Shah, A. Raina, "Construction of non-CSS quantum codes using measurements on cluster states"', link: '' },
    ]
    const posters = [
        { id: 1, title: 'S. Gupta and A. Raina, "A feed-forward method for encoding a Stabilizer Code using MBQC", QCMC, IIT Madras', link: '' },
        { id: 2, title: 'H. Gupta and A. Raina, "Construction of [[n, 1, d]] non-CSS code family via measurements on graph states", QCMC, IIT Madras', link: '' },
        { id: 3, title: 'S. Shaw, H. Gupta, S. M. Shah, A. Raina, "Construction of non-CSS quantum codes using measurements on cluster states", TQC 2023, Portugal', link: '' },
        { id: 4, title: 'K. N. M. Sharma, C. de Valk, A. Raina, J. van Velzen, "State preparation using deconvolution of probability distributions", TQC 2023, Portugal', link: '' },
        { id: 5, title: 'N. Rengaswamy, A. Raina, N. Raveendran and B. Vasic, "Distilling GHZ States using Stabilizer Codes," TQC 2022.', link: '' },
    ]

  const Section = ({ title, items }) => (
    <div className="mb-16">
      <h2 className="font-unbounded font-bold text-2xl md:text-3xl text-slate-800 mb-6 border-l-4 border-cyan-500 pl-4">{title}</h2>
      <ol className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.id} className="bg-white/70 backdrop-blur-sm border border-cyan-100 rounded-xl px-5 py-4 shadow-sm font-asans text-slate-700 text-sm md:text-base leading-relaxed hover:border-cyan-300 transition-colors">
            <span className="font-semibold text-cyan-600 mr-2">[{item.id}]</span>
            {item.link
              ? <a href={item.link} target="_blank" rel="noreferrer" className="hover:text-cyan-700 hover:underline">{item.title}</a>
              : item.title
            }
          </li>
        ))}
      </ol>
    </div>
  )

  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-[12px] font-semibold tracking-[0.2em] text-cyan-600 uppercase">Research Output</span>
          <h1 className="font-unbounded font-bold text-4xl md:text-5xl text-slate-900 mt-4">Publications</h1>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-cyan-500 to-teal-400 mx-auto rounded-full"></div>
        </div>

        <Section title="Journal Publications" items={journals} />
        <Section title="Conference Proceedings" items={conferences} />
        <Section title="Pre-prints" items={preprints} />
        <Section title="Posters" items={posters} />

      </div>
    </div>
  )
}

export default Publications