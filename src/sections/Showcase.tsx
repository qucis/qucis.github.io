import { useEffect, useRef, useState } from 'react';
import { showcaseItems } from '../data/showcase';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, CalendarDays } from 'lucide-react';

type ShowcaseItem = {
  id: string;
  date: string;
  title: string;
  shortDesc: string;
  fullDesc: React.ReactNode;
  images: string[];
  link?: string;
  linkText?: string;
};

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative rounded-xl overflow-hidden bg-black/30 aspect-video">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${title} - image ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === current ? 'bg-white scale-125' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function EventModal({ item, onClose }: { item: ShowcaseItem; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0f1420] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
      >
        {/* Modal header */}
        <div className="flex items-start justify-between p-6 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-2">
              <CalendarDays className="w-4 h-4" />
              {item.date}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="ml-4 shrink-0 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white rounded-full p-2 transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6 space-y-6">
          {item.images.length > 0 && (
            <ImageCarousel images={item.images} title={item.title} />
          )}
          <div className="text-white/70 leading-relaxed text-sm md:text-base space-y-3">
            {item.fullDesc}
          </div>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
            >
              {item.linkText ?? 'View More'} <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="showcase" ref={sectionRef} className="relative py-20 md:py-28 bg-[#0a0e17]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Lab Life
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Student <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Highlights from our lab's events, workshops, conferences, and student achievements.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showcaseItems as ShowcaseItem[]).map((item, index) => (
            <motion.div
              key={item.id}
              className={`group cursor-pointer bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 + index * 80}ms` }}
              onClick={() => setSelectedItem(item)}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {/* Thumbnail */}
              {item.images.length > 0 && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-2 text-cyan-400/80 text-xs font-semibold tracking-wider uppercase mb-3">
                  <CalendarDays className="w-3.5 h-3.5" />
                  {item.date}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
                  {item.shortDesc}
                </p>
                <div className="mt-4 text-cyan-400 text-xs font-semibold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read More →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <EventModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
