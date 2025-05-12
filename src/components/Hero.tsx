"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Define a mix of video and image slides with your folder structure
const slides = [
  { type: 'video', src: '/Videos/bleedTikTokjRk0Gl4DDQgpv.mp4' }, // Use your existing video
  { type: 'image', src: '/Images/placeholder-hero.jpg' },
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
    <section id="hero" className="relative h-screen flex items-center justify-center">
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
                onError={(e) => {
                  // Fallback for missing videos - switch to image fallback
                  const target = e.target as HTMLVideoElement;
                  const container = target.parentElement;
                  if (container) {
                    // Replace with a fallback image
                    const img = document.createElement('img');
                    img.src = '/Images/default-placeholder.jpg';
                    img.className = target.className;
                    img.style.opacity = '1';
                    target.style.display = 'none';
                    container.appendChild(img);
                  }
                }}
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
                onError={(e) => {
                  // Fallback for missing images
                  const target = e.target as HTMLImageElement;
                  target.src = '/Images/default-placeholder.jpg';
                }}
              />
            )
          )
        )}
      </AnimatePresence>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />

      {/* Foreground content - centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-6xl md:text-8xl font-bold leading-tight"
        >
          Rafan<br />Ahmed
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-gray-200 text-xl md:text-2xl mt-8 mx-auto max-w-3xl"
        >
          Machine Learning Enthusiast | Full-Stack Developer | CS Student at UNC Charlotte
          Specializing in algorithmic trading, quantitative finance, and AI-powered applications.
        </motion.p>
      </div>
    </section>
  );
}