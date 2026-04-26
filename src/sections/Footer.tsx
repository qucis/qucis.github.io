import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';

const quickLinks = [
  { label: 'About', href: "/about" },
  { label: 'Team', href: "/team" },
  { label: 'Publications', href: "/publications" },
  { label: 'Student Showcase', href: "/showcase" },
  { label: 'Contact', href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0e17]/80 backdrop-blur-sm overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-[#0a0e17] pointer-events-none -translate-y-full" />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="QuCIS Logo" 
                className="h-20 w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Quantum Computing and Information Systems Lab @{' '}
              <a
                href="https://www.iiserb.ac.in/"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                IISER Bhopal
              </a>
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/qucis"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/qucis"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ankur@iiserb.ac.in"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/80 text-sm font-semibold tracking-wider uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/80 text-sm font-semibold tracking-wider uppercase mb-6">
              Get In Touch
            </h4>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Interested in quantum computing research? We would love to hear from
              you if you share our vision.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium hover:bg-orange-500/20 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; 2025 QuCIS. All Rights Reserved.
          </p>
          <p className="text-white/25 text-xs">
            Maintained and developed by{' '}
            <span className="text-orange-400/60">Harsh Gupta</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
