import { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Phone, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 md:py-28 bg-[#0a0e17]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            We'd love to hear from you : for collaborations, inquiries, or to join our research team.
          </p>
        </div>

        {/* Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Contact Info */}
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:border-cyan-500/20 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-1">Dr. Ankur Raina</h3>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-8">Principal Investigator</p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1">Address</p>
                  <p className="text-white/70 leading-relaxed text-sm">
                    Office 208, Academic Building 1C<br />
                    Lab 204, Academic Building 1C<br />
                    Department of EECS, IISER Bhopal.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:ankur@iiserb.ac.in" className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors duration-200">
                    ankur@iiserb.ac.in
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-white/70 text-sm">+91 755 269 2654</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/company/qucis"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors duration-200 flex items-center gap-1"
                  >
                    QuCIS Lab <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Join Research */}
          <div className="flex flex-col gap-6">
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:border-orange-500/20 transition-all duration-500 flex-1">
              <h3 className="text-xl font-bold text-white mb-4">Join Our Research</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                We are always looking for motivated students to join us in exploring the frontiers of quantum information science. If you are passionate about quantum computing, coding theory, or related areas, we encourage you to reach out.
              </p>
              <a
                href="https://www.iiserb.ac.in/doaa/admission"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.5)]"
              >
                PhD Admissions <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Map / Visual placeholder */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-cyan-500/20 transition-all duration-500">
              <p className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-2">Location</p>
              <p className="text-white/70 text-sm">
                Indian Institute of Science Education and Research Bhopal<br />
                <span className="text-white/40">Bhauri, Bhopal, Madhya Pradesh 462066</span>
              </p>
              <a
                href="https://maps.google.com/?q=IISER+Bhopal"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors duration-200"
              >
                Open in Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
