import { useEffect, useRef, useState } from 'react';
import { Briefcase, Laptop, GraduationCap, ArrowUpRight } from 'lucide-react';

const opportunities = [
  {
    icon: GraduationCap,
    title: 'PhD Positions',
    status: '1 open position (NQM)',
    statusColor: 'text-emerald-400',
    desc: 'We currently have one open PhD position under the National Quantum Mission (NQM). Interested candidates are encouraged to apply and reach out with their CV and research interests.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'hover:border-cyan-500/30',
  },
  {
    icon: Laptop,
    title: 'Remote Internships',
    status: 'Projects available',
    statusColor: 'text-emerald-400',
    desc: 'We have some projects available for remote internships. If you are a motivated student with a background in physics, mathematics, or computer science, we would love to hear from you.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-500/30',
  },
  {
    icon: Briefcase,
    title: 'Collaborations',
    status: 'Always open',
    statusColor: 'text-orange-400',
    desc: 'We actively seek academic and industrial collaborations. If you are working on complementary research or looking to bridge theory and application in quantum computing, feel free to reach out.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'hover:border-orange-500/30',
  },
];

export default function Careers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="careers" ref={sectionRef} className="relative py-20 md:py-28 bg-[#0a0e17]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* <span className="inline-block text-orange-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Contact Us
          </span> */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Career &amp; <span className="text-gradient">Opportunities</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            We are always looking for driven individuals who want to push the boundaries of quantum science.
          </p>
        </div>

        {/* Opportunity Cards */}
        <div className="space-y-6 mb-20">
          {opportunities.map((opp, index) => (
            <div
              key={opp.title}
              className={`group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 ${opp.border} transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${200 + index * 120}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className={`w-14 h-14 rounded-2xl ${opp.bg} flex items-center justify-center shrink-0`}>
                  <opp.icon className={`w-7 h-7 ${opp.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-white">{opp.title}</h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-white/5 ${opp.statusColor}`}>
                      {opp.status}
                    </span>
                  </div>
                  <p className="text-white/60 leading-relaxed text-sm md:text-base">{opp.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-white/50 text-sm mb-6">
            Interested? Send your CV and a brief statement of research interest to our PI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ankur@iiserb.ac.in"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(249,115,22,0.5)]"
            >
              Email Us <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.iiserb.ac.in/doaa/admission"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300"
            >
              PhD Admissions <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
