"use client";
// src/components/Hero.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Define a mix of video and image slides
const slides = [
  { type: 'video', src: '/Videos/bleedTikTokjRk0Gl4DDQgpv.mp4' },
  { type: 'image', src: '/Images/_.jpeg' },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background carousel slides */}
      <AnimatePresence>
        {slides.map((slide, i) =>
          i === index && (
            slide.type === 'video' ? (
              <motion.video
                key={slide.src}
                src={slide.src}
                autoPlay
                loop
                muted
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <motion.img
                key={slide.src}
                src={slide.src}
                alt="Hero background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )
          )
        )}
      </AnimatePresence>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-5xl md:text-7xl font-bold leading-tight"
        >
          Rafan Ahmed
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-gray-200 text-lg md:text-2xl mt-4 max-w-2xl"
        >
          Computer Science student at UNC Charlotte specializing in AI. Skilled in Python,
          Java, C, Django, and Next.js.
        </motion.p>
      </div>
    </section>
  );
}