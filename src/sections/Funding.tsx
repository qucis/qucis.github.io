import { useEffect, useRef, useState } from 'react';
import { fundingSources } from '../data/funding';

export default function Funding() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="funding" ref={sectionRef} className="relative py-20 md:py-28 bg-[#0a0e17]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-orange-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Support &amp; Grants
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Funding</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            We are grateful for the support of these organizations that make our research possible.
          </p>
        </div>

        {/* Funding Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fundingSources.map((source, index) => (
            <div
              key={source.id}
              className={`group flex flex-col items-center justify-center gap-6 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:border-orange-500/30 hover:bg-white/[0.06] transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="w-full h-28 flex items-center justify-center">
                <img
                  src={source.img}
                  alt={source.title}
                  className="max-h-full max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                />
              </div>
              <p className="text-center text-white/70 text-sm font-medium leading-snug group-hover:text-white transition-colors duration-300">
                {source.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
