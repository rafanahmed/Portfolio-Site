"use client";
import { motion } from 'framer-motion';
import { useRef } from 'react';
const projects = [
  { title: 'QC-RNN-Trading-Strategy', desc: 'Deep learning based trading algorithm.', link: '#' },
  { title: 'AI-Study-Assistant', desc: 'Intelligent study planner with chat support.', link: '#' },
  { title: 'Study-Bud-App', desc: 'Collaborative study group platform.', link: '#' },
  { title: 'Portfolio Website', desc: 'This page showcasing my work.', link: '#' },
];

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -clientWidth : clientWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="relative bg-black py-16">
      <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-repeat" />
      <div className="max-w-7xl mx-auto relative px-4">
        <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full z-10" aria-label="Scroll Left">
          ←
        </button>
        <div ref={carouselRef} className="flex overflow-x-scroll scroll-smooth space-x-6">
          {projects.map((proj) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="min-w-[300px] bg-gray-900 bg-opacity-50 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-gray-600 transition-all flex-shrink-0"
            >
              <h3 className="text-white text-xl font-semibold">{proj.title}</h3>
              <p className="text-gray-300 mt-2">{proj.desc}</p>
              <a href={proj.link} className="mt-4 inline-block text-white underline">
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
        <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full z-10" aria-label="Scroll Right">
          →
        </button>
      </div>
    </section>
  );
}