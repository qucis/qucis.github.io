import React from "react";
import Link from "next/link";

const HeroContainer = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 pb-20 pt-[120px]">

      {/* ── WELCOME BLOCK ── centered, full-width */}
      <div className="text-center max-w-3xl mx-auto z-10">

        {/* Subtle label */}
        <span className="inline-block text-[13px] font-semibold tracking-[0.18em] text-cyan-600 uppercase mb-4">
          Quantum Computing &amp; Information Systems
        </span>

        <h1 className="font-unbounded font-extrabold text-5xl lg:text-7xl text-slate-900 leading-[1.1] mt-4">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
            QuCIS
          </span>
        </h1>

        <p className="font-asans mt-6 text-slate-600 text-lg lg:text-xl leading-relaxed max-w-xl mx-auto">
          Pioneering the frontiers of quantum computation, error correction, and quantum networks.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link href="/about">
            <button className="font-asans px-8 py-3.5 rounded-[14px] bg-cyan-600 text-white font-semibold text-[15px] shadow-lg hover:bg-cyan-700 hover:shadow-cyan-200 hover:shadow-xl transition-all">
              Know Us
            </button>
          </Link>
          <Link href="/publications">
            <button className="font-asans px-8 py-3.5 rounded-[14px] border border-cyan-200 bg-white text-cyan-700 font-semibold text-[15px] shadow-sm hover:bg-cyan-50 transition-all">
              Our Research
            </button>
          </Link>
        </div>
      </div>

      {/* ── MISSION PILLARS ── cards in a row below the welcome text */}
      <div className="mt-20 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 z-10">

        {[
          {
            icon: (
              <svg className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            ),
            title: "Our Mission",
            desc: "Push the boundaries of quantum information science and explore the next frontier of computation.",
          },
          {
            icon: (
              <svg className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            ),
            title: "Our Research",
            desc: "Cutting-edge work in quantum error correction, quantum algorithms, and quantum networks.",
          },
          {
            icon: (
              <svg className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ),
            title: "Our Team",
            desc: "A diverse group of researchers, students, and collaborators driven by curiosity and excellence.",
          },
        ].map((item, i) => (
          <div key={i} className="bg-white/70 backdrop-blur-sm border border-cyan-100 rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="font-unbounded font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
            <p className="font-asans text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default HeroContainer;
