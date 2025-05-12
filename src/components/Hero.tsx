"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ParallaxSection from './ParallaxSection';
import TextReveal from './TextReveal';
import ScrollProgressBar from './ScrollProgressBar';

// Define a mix of video and image slides with your folder structure
const slides = [
  { type: 'image', src: '/Images/PXL_20250501_185159764.jpg' }, 
  { type: 'image', src: '/Images/PXL_20250501_183506285.jpg' }, 
  { type: 'image', src: '/Images/PXL_20250501_184534667.jpg' }, 
  { type: 'image', src: '/Images/IMG_3607 3.png' }, 
  { type: 'image', src: '/Images/IMG_2313.png' },
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
    <>
      {/* Add a scroll progress indicator at the top of the page */}
      <ScrollProgressBar color="white" height={3} />
      
      <section id="hero" className="relative h-screen flex items-center justify-center">
        {/* Background carousel slides with parallax effect */}
        <AnimatePresence>
          {slides.map((slide, i) =>
            i === index && (
              <ParallaxSection key={slide.src} strength={80} direction="up">
                {slide.type === 'video' ? (
                  <motion.video
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
                )}
              </ParallaxSection>
            )
          )}
        </AnimatePresence>

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />

        {/* Foreground content - centered with text reveal */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <TextReveal
            text="Rafan Ahmed"
            className="text-white text-6xl md:text-8xl font-bold leading-tight"
            tag="h1"
            wordDelay={0.15}
            initialDelay={0.5}
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <TextReveal
              text="Machine Learning Enthusiast | Full-Stack Developer | CS Student at UNC Charlotte"
              className="text-gray-200 text-xl md:text-2xl mt-8 mx-auto max-w-3xl"
              tag="p"
              wordDelay={0.02}
              initialDelay={0.2}
            />
            
            <TextReveal
              text="Specializing in algorithmic trading, quantitative finance, and AI-powered applications."
              className="text-gray-200 text-xl md:text-2xl mt-2 mx-auto max-w-3xl"
              tag="p"
              wordDelay={0.02}
              initialDelay={0.8}
            />
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.5, 
              delay: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-2 bg-white rounded-full mt-2"
                animate={{ 
                  y: [0, 12, 0],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <p className="text-white text-sm mt-2">Scroll Down</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}