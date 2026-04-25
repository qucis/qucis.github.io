import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0a0e17] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Shape the Future of{' '}
          <span className="text-gradient">Quantum Computing</span>
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Join our passionate team of researchers and students as we push the
          boundaries of quantum information science. Together, we can unlock new
          possibilities that revolutionize industries and improve lives.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            Contact the Lab
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/careers"
            className="px-8 py-4 rounded-full border border-white/20 text-white/70 font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-300"
          >
            Career &amp; Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
}
