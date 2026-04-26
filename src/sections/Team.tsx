import { useEffect, useRef, useState, useMemo } from 'react';
import { currentMembers, alumniMembers, alumniYears } from '../data/team';
import type { TeamMember } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const piMember = currentMembers.find((member: TeamMember) => member.group === 'pi');

const currentMemberGroups = [
  { key: 'pi', title: 'Principal Investigator' },
  { key: 'phd', title: 'PhDs' },
  { key: 'bsms', title: 'BS-MS' },
  { key: 'project', title: 'Project' },
];

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const groupedCurrentMembers = useMemo(() => {
    return currentMemberGroups.map((group) => ({
      ...group,
      members: currentMembers.filter((member: TeamMember) => member.group === group.key),
    }));
  }, []);

  const filteredAlumni = useMemo(() => {
    return selectedYear === 'All' 
      ? alumniMembers 
      : alumniMembers.filter((alumnus: TeamMember) => alumnus.year === selectedYear);
  }, [selectedYear]);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-[#0a0e17]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Our People
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Meet the <span className="text-gradient">Team</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            The brilliant minds driving quantum innovation forward.
          </p>
        </div>

        {piMember ? (
          <div className={`mb-24 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 md:p-12 shadow-lg shadow-cyan-950/20">
              <div className="md:w-[55%]">
                <span className="inline-block text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                  Principal Investigator
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  {piMember.name}
                </h3>
                <p className="text-cyan-400/80 text-sm font-medium uppercase tracking-wide mb-4">
                  {piMember.position}
                </p>
                <p className="text-white/70 text-base md:text-lg leading-relaxed">
                  <strong>{piMember.name}</strong>{' '}
                  {piMember.bio.replace(/^Dr\. Ankur Raina\s*/, '')}
                </p>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={piMember.img}
                  alt={piMember.name}
                  className="w-[320px] md:w-[380px] rounded-2xl shadow-xl border border-white/10"
                />
              </div>
            </div>
          </div>
        ) : null}

        {/* Current Members Grouped */}
        <div className="mb-24 space-y-16">
          {groupedCurrentMembers.map((group) => 
            group.key === 'pi' ? null : group.members.length ? (
              <div key={group.title}>
                <h3 className={`text-2xl font-bold text-white mb-8 border-b border-white/10 pb-2 inline-block transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {group.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {group.members.map((member: TeamMember, index: number) => (
                    <div
                      key={member.id}
                      className={`group relative bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 ${
                        visible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: `${100 + index * 50}ms` }}
                    >
                      <div className="p-4 bg-black/20">
                        <div className="flex items-start gap-4">
                          <button
                            type="button"
                            onClick={() => setSelectedImage({ src: member.img, alt: member.name })}
                            className="shrink-0 rounded-lg overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-colors cursor-zoom-in"
                            aria-label={`Open full-size image of ${member.name}`}
                          >
                            <img
                              src={member.img}
                              alt={member.name}
                              className="w-16 h-16 object-cover"
                            />
                          </button>
                          <div className="min-w-0">
                            <h3 className="text-base font-bold text-white mb-1 leading-tight">{member.name}</h3>
                            <p className="text-cyan-400/80 text-xs font-medium mb-3">{member.position}</p>
                            <p className="text-white/60 text-xs leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                              {member.bio}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>

        {/* Alumni Section */}
        <div className={`transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-l-4 border-cyan-500 pl-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Alumni</h2>

            <div className="flex bg-white/5 backdrop-blur-sm p-1 rounded-xl border border-white/10 w-fit">
              {alumniYears.map((year: string) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                    selectedYear === year
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-500/20'
                      : 'text-white/50 hover:text-cyan-400'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[300px]">
            <AnimatePresence mode="popLayout">
              {filteredAlumni.map((alumnus: TeamMember, index: number) => (
                <motion.div
                  key={alumnus.id || index}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
                >
                  <div className="p-4 bg-black/20">
                    <div className="flex items-start gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedImage({ src: alumnus.img, alt: alumnus.name })}
                        className="shrink-0 rounded-lg overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-colors cursor-zoom-in"
                        aria-label={`Open full-size image of ${alumnus.name}`}
                      >
                        <img
                          src={alumnus.img}
                          alt={alumnus.name}
                          className="w-16 h-16 object-cover"
                        />
                      </button>
                      <div className="min-w-0">
                        <h3 className="text-base font-bold text-white mb-1 leading-tight">{alumnus.name}</h3>
                        <p className="text-cyan-400/80 text-xs font-medium mb-3">{alumnus.year} • {alumnus.position}</p>
                        <p className="text-white/60 text-xs leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                          {alumnus.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] w-full"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full max-h-[90vh] object-contain rounded-lg shadow-2xl bg-[#0a0e17]"
              />
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-white text-slate-900 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-500 hover:text-white transition-colors text-xl font-bold"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
