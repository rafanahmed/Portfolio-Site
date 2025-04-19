"use client";
// src/components/Hero.tsx
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen bg-black flex flex-col items-center justify-center text-center px-4">
      <img
        src="/hero-placeholder.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"
      />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-white text-5xl md:text-7xl font-bold z-10"
      >
        Rafan Ahmed
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-gray-300 text-lg md:text-2xl mt-4 z-10 max-w-2xl"
      >
        Computer Science student at UNC Charlotte specializing in AI. Skilled in Python, Java, C,
        Django, and Next.js.
      </motion.p>
    </section>
  );
}
