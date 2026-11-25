import { useEffect, useRef, useState, useMemo } from 'react';
import { currentMembers, alumniMembers, alumniYears, alumniProjectMembers, alumniProjectYears } from '../data/team';
import type { TeamMember } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const piMember = currentMembers.find((member: TeamMember) => member.group === 'pi');

const currentMemberGroups = [
  { key: 'pi', title: 'Principal Investigator' },
  { key: 'phd', title: 'PhDs' },
  { key: 'bsms', title: 'BS-MS' },
  { key: 'project', title: 'Project' },
];

interface TeamMemberCardProps {
  member: TeamMember;
  subtitle: string;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onSelectImage: (image: { src: string; alt: string }) => void;
}

function TeamMemberCard({
  member,
  subtitle,
  isExpanded,
  onToggleExpand,
  onSelectImage,
}: TeamMemberCardProps) {
  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.25, ease: 'easeOut' } }}
      onClick={onToggleExpand}
      className={`group relative cursor-pointer bg-white/[0.03] border rounded-xl overflow-hidden transition-colors duration-300 ${
        isExpanded
          ? 'border-cyan-500/40'
          : 'border-white/[0.08] hover:border-cyan-500/30'
      }`}
    >
      <div className="p-4 bg-black/20">
        <div className="flex items-start gap-4">
          {member.img ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectImage({ src: member.img!, alt: member.name });
              }}
              className="shrink-0 rounded-lg overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-colors cursor-zoom-in"
              aria-label={`Open full-size image of ${member.name}`}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-16 h-16 object-cover"
              />
            </button>
          ) : (
            <div
              className="shrink-0 w-16 h-16 rounded-lg border border-white/10 bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-xl select-none"
              aria-hidden="true"
            >
              {member.name.charAt(0).toUpperCase()}
            </div>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleExpand();
            }}
            aria-expanded={isExpanded}
            className="min-w-0 flex-1 text-left cursor-pointer focus:outline-none"
          >
            <h3 className="text-base font-bold text-white mb-1 leading-tight">{member.name}</h3>
            <p className={`text-cyan-400/80 text-xs font-medium ${member.bio ? 'mb-3' : ''}`}>{subtitle}</p>
            {member.bio ? (
              <motion.p
                key={isExpanded ? 'expanded' : 'collapsed'}
                initial={{ opacity: 0.75 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className={`text-white/60 text-xs leading-relaxed ${
                  isExpanded ? '' : 'line-clamp-3'
                }`}
              >
                {member.bio}
              </motion.p>
            ) : null}
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}

interface AlumniSectionProps {
  title: string;
  members: TeamMember[];
  years: string[];
  selectedYear: string;
  onSelectYear: (year: string) => void;
  cardKeyPrefix: string;
  expandedCards: Record<string, boolean>;
  onToggleCard: (cardKey: string) => void;
  onSelectImage: (image: { src: string; alt: string }) => void;
  visible: boolean;
  className?: string;
  minHeightClass?: string;
}

function AlumniSection({
  title,
  members,
  years,
  selectedYear,
  onSelectYear,
  cardKeyPrefix,
  expandedCards,
  onToggleCard,
  onSelectImage,
  visible,
  className = '',
  minHeightClass = 'min-h-[300px]',
}: AlumniSectionProps) {
  return (
    <div className={`${className} transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-l-4 border-cyan-500 pl-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>

        {years.length > 1 ? (
          <div className="flex bg-white/5 backdrop-blur-sm p-1 rounded-xl border border-white/10 w-fit">
            {years.map((year: string) => (
              <button
                key={year}
                onClick={() => onSelectYear(year)}
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
        ) : null}
      </div>

      <motion.div layout className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${minHeightClass}`}>
        <AnimatePresence mode="popLayout">
          {members.map((alumnus: TeamMember, index: number) => {
            const cardKey = `${cardKeyPrefix}-${alumnus.id ?? index}`;
            return (
              <motion.div
                key={alumnus.id ?? index}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <TeamMemberCard
                  member={alumnus}
                  subtitle={alumnus.year ? `${alumnus.year} • ${alumnus.position}` : alumnus.position}
                  isExpanded={Boolean(expandedCards[cardKey])}
                  onToggleExpand={() => onToggleCard(cardKey)}
                  onSelectImage={onSelectImage}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedProjectYear, setSelectedProjectYear] = useState('All');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (cardKey: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardKey]: !prev[cardKey],
    }));
  };

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

  const filteredProjectAlumni = useMemo(() => {
    return selectedProjectYear === 'All'
      ? alumniProjectMembers
      : alumniProjectMembers.filter((alumnus: TeamMember) => alumnus.year === selectedProjectYear);
  }, [selectedProjectYear]);

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
            Efforts focused on advancing quantum research.
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
                  {group.members.map((member: TeamMember, index: number) => {
                    const cardKey = `current-${member.id}`;
                    return (
                      <div
                        key={member.id}
                        className={`transition-all duration-500 ${
                          visible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: `${100 + index * 50}ms` }}
                      >
                        <TeamMemberCard
                          member={member}
                          subtitle={member.position}
                          isExpanded={Boolean(expandedCards[cardKey])}
                          onToggleExpand={() => toggleCard(cardKey)}
                          onSelectImage={setSelectedImage}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null
          )}
        </div>

        {/* Alumni Section */}
        <AlumniSection
          title="Alumni"
          members={filteredAlumni}
          years={alumniYears}
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
          cardKeyPrefix="alumni"
          expandedCards={expandedCards}
          onToggleCard={toggleCard}
          onSelectImage={setSelectedImage}
          visible={visible}
        />

        {/* Former Project Staff Section */}
        <AlumniSection
          title="Former Project Staff"
          members={filteredProjectAlumni}
          years={alumniProjectYears}
          selectedYear={selectedProjectYear}
          onSelectYear={setSelectedProjectYear}
          cardKeyPrefix="project-alumni"
          expandedCards={expandedCards}
          onToggleCard={toggleCard}
          onSelectImage={setSelectedImage}
          visible={visible}
          className="mt-24"
          minHeightClass="min-h-[150px]"
        />
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
