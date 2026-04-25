import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Publications', href: '/publications' },
  { label: 'Showcase', href: '/showcase' },
  { label: 'Funding', href: '/funding' },
  { label: 'Career & Opportunities', href: '/careers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
        ? 'bg-[#0a0e17]/40 backdrop-blur-md'
        : 'bg-transparent'
        }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17]/80 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center group">
          <img
            src="/logo.png"
            alt="QuCIS Logo"
            className="h-20 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-orange-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="/contact"
            className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)] transition-all duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0e17]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium text-center"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
