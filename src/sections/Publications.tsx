import { useEffect, useRef, useState } from 'react';
import { journalPublications, conferenceProceedings, preprints, posters } from '../data/publications';
import type { Publication } from '../types';
import { ExternalLink, BookOpen, Presentation, FileText, Bookmark } from 'lucide-react';

const categories = [
  {
    title: 'Journal Publications',
    icon: BookOpen,
    data: journalPublications,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'group-hover:border-cyan-500/30',
  },
  {
    title: 'Conference Proceedings',
    icon: Presentation,
    data: conferenceProceedings,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'group-hover:border-orange-500/30',
  },
  {
    title: 'Preprints',
    icon: FileText,
    data: preprints,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'group-hover:border-purple-500/30',
  },
  {
    title: 'Posters',
    icon: Bookmark,
    data: posters,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'group-hover:border-emerald-500/30',
  },
];

export default function Publications() {
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
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="publications"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-[#0a0e17]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-purple-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Research Output
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Publications</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            A comprehensive list of our latest research papers, proceedings, and preprints.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-24">
          {categories.map((category, catIdx) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + catIdx * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                <div className={`p-3 rounded-xl ${category.bg}`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                <span className="ml-auto bg-white/5 px-3 py-1 rounded-full text-xs font-medium text-white/50">
                  {category.data.length} Items
                </span>
              </div>

              <div className="space-y-4">
                {category.data.map((pub: Publication, index: number) => (
                  <a
                    key={pub.id}
                    href={pub.link || '#'}
                    target={pub.link ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`group block bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 transition-all duration-300 ${category.border} ${
                      pub.link ? 'hover:bg-white/[0.04]' : 'cursor-default'
                    }`}
                  >
                    <div className="flex gap-4">
                      <div className="text-white/20 font-bold w-6 shrink-0 mt-1">
                        {index + 1}.
                      </div>
                      <div className="flex-1">
                        <p className="text-white/80 leading-relaxed text-sm md:text-base group-hover:text-white transition-colors duration-300">
                          {pub.title}
                        </p>
                      </div>
                      {pub.link && (
                        <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                          <ExternalLink className={`w-5 h-5 ${category.color}`} />
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
