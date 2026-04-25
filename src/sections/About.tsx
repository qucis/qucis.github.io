import { useEffect, useRef, useState } from 'react';
import { Microscope, Network, Shield, Sparkles } from 'lucide-react';
import CTA from '../sections/CTA'
const researchAreas = [
  {
    icon: Shield,
    title: 'Quantum Error Correction',
    desc: 'Developing robust methods to protect quantum information from decoherence and noise.',
  },
  {
    icon: Sparkles,
    title: 'Quantum Algorithms',
    desc: 'Designing efficient algorithms that leverage quantum superposition and entanglement.',
  },
  {
    icon: Network,
    title: 'Quantum Networks',
    desc: 'Building distributed quantum architectures for secure communication.',
  },
  {
    icon: Microscope,
    title: 'Quantum Architectures',
    desc: 'Exploring novel quantum computing systems and their practical implementations.',
  },
];

const stats = [
  { value: 20, suffix: '+', label: 'Publications' },
  { value: 10, suffix: '+', label: 'Team Members' },
  { value: 5, suffix: '', label: 'Funding Sources' },
];

function AnimatedCounter({ value, suffix, started }: { value: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(ease * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, value]);

  return <span>{count}{suffix}</span>;
}

export default function About() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0a0e17]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="inline-block text-orange-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Quantum Computing &<br />
            <span className="text-gradient">Information Systems</span>
          </h2>
        </div>

        {/* Main description */}
        <div
          className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Welcome to the{' '}
              <span className="text-cyan-400 font-medium">
                Quantum Computing and Information Systems (QuCIS) Lab!
              </span>{' '}
              At QuCIS, we are dedicated to pushing the boundaries of quantum
              information and exploring the frontiers of quantum computation. Our
              research delves into the most cutting-edge aspects of this
              transformative field, from quantum error correction and quantum
              algorithms to quantum networks and distributed quantum architectures.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              We are driven by a singular vision: to harness the power of quantum
              computing for the betterment of mankind. Through innovative research,
              collaboration, and a deep commitment to advancing quantum technologies,
              we aim to unlock new possibilities that can revolutionize industries,
              enhance global problem-solving, and improve lives.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              We would love to hear from you if you share our vision. Join us as we
              embark on the road toward shaping the future of quantum information
              science!
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-20 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-orange-500/20 transition-all duration-500 group"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} started={visible} />
              </div>
              <div className="text-white/40 text-xs font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Research areas grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area, index) => (
            <div
              key={area.title}
              className={`group relative bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 hover:border-orange-500/30 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                <area.icon className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{area.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{area.desc}</p>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
        <CTA />
      </div>
    </section>
  );
}
