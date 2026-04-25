import { useEffect, useRef, useState, useMemo } from 'react';
import { currentMembers, alumniMembers, alumniYears } from '../data/team';
import { motion, AnimatePresence } from 'framer-motion';

const currentMemberGroups = [
  { key: 'phd', title: 'PhDs' },
  { key: 'bsms', title: 'BS-MS' },
  { key: 'project', title: 'Project' },
];

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState('All');

  const groupedCurrentMembers = useMemo(() => {
    return currentMemberGroups.map((group) => ({
      ...group,
      members: currentMembers.filter((member) => member.group === group.key),
    }));
  }, []);

  const filteredAlumni = useMemo(() => {
    return selectedYear === 'All' 
      ? alumniMembers 
      : alumniMembers.filter((alumnus) => alumnus.year === selectedYear);
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

        {/* Current Members Grouped */}
        <div className="mb-24 space-y-16">
          {groupedCurrentMembers.map((group) => 
            group.members.length ? (
              <div key={group.title}>
                <h3 className={`text-2xl font-bold text-white mb-8 border-b border-white/10 pb-2 inline-block transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {group.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {group.members.map((member, index) => (
                    <div
                      key={member.id}
                      className={`group relative bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 ${
                        visible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: `${100 + index * 50}ms` }}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-4 bg-black/20">
                        <h3 className="text-base font-bold text-white mb-1 leading-tight">{member.name}</h3>
                        <p className="text-cyan-400/80 text-xs font-medium mb-3">{member.position}</p>
                        <p className="text-white/60 text-xs leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                          {member.bio}
                        </p>
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
              {alumniYears.map((year) => (
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
              {filteredAlumni.map((alumnus, index) => (
                <motion.div
                  key={alumnus.id || index}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={alumnus.img}
                      alt={alumnus.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4 bg-black/20">
                    <h3 className="text-base font-bold text-white mb-1 leading-tight">{alumnus.name}</h3>
                    <p className="text-cyan-400/80 text-xs font-medium mb-3">{alumnus.year} • {alumnus.position}</p>
                    <p className="text-white/60 text-xs leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                      {alumnus.bio}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
