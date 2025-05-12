"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Define a mix of video and image slides with your folder structure
const slides = [
  { type: 'image', src: '/Images/PXL_20250501_185159764.jpg'}, 
  { type: 'image', src: '/Images/1_lT08eHnMJZWi61_rb4WA9w.gif'}, 
  { type: 'image', src: '/Images/PXL_20250501_183506285.jpg'}, 
  { type: 'image', src: '/Images/IMG_2313.png'},
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  
  // Set up the carousel interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  // Fallback gradient if images fail
  const fallbackStyle = {
    backgroundImage: "linear-gradient(45deg, #1a1a1a 0%, #2c2c2c 100%)",
    backgroundSize: "cover"
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <AnimatePresence mode="wait">
        {slides.map((slide, i) =>
          i === index && (
            <motion.div
              key={slide.src}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={slide.src}
                alt={`Slide ${i+1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${slide.src}`);
                  // Apply fallback styling to the parent div on error
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parentDiv = target.parentElement;
                  if (parentDiv) {
                    parentDiv.style.backgroundImage = fallbackStyle.backgroundImage;
                    parentDiv.style.backgroundSize = fallbackStyle.backgroundSize;
                  }
                }}
              />
            </motion.div>
          )
        )}
      </AnimatePresence>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />

      {/* Foreground content with text */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
        <motion.h1
          className="text-white text-6xl md:text-8xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Rafan Ahmed
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8"
        >
          <motion.p
            className="text-gray-200 text-xl md:text-2xl mt-8 mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Machine Learning Enthusiast | Full-Stack Developer | CS Student at UNC Charlotte
          </motion.p>
          
          <motion.p
            className="text-gray-200 text-xl md:text-2xl mt-2 mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Specializing in algorithmic trading, quantitative finance, and AI-powered applications.
          </motion.p>
        </motion.div>
        
        {/* Optional: Image navigation dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-white" : "bg-white bg-opacity-30"
              } transition-all duration-300`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}