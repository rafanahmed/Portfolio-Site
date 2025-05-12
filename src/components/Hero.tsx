"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
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
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [fallbackActive, setFallbackActive] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Preload images
  useEffect(() => {
    const imagePromises = slides.map((slide, i) => {
      return new Promise((resolve, reject) => {
        if (slide.type === 'image') {
          const img = new Image();
          img.src = slide.src;
          img.onload = () => resolve(slide.src);
          img.onerror = () => {
            console.error(`Failed to load image: ${slide.src}`);
            reject(new Error(`Failed to load image: ${slide.src}`));
          };
        } else {
          // For videos, just resolve immediately
          resolve(slide.src);
        }
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error("Some images failed to load:", error);
        setFallbackActive(true);
        setImagesLoaded(true); // Still mark as loaded to continue with fallbacks
      });

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  // For fallback display if images don't load
  const fallbackStyle = {
    backgroundImage: "linear-gradient(45deg, #1a1a1a 0%, #2c2c2c 100%)",
    backgroundSize: "cover"
  };

  return (
    <>
      {/* Add a scroll progress indicator at the top of the page */}
      <ScrollProgressBar color="white" height={3} zIndex={100} />
      
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background carousel slides with parallax effect */}
        {imagesLoaded ? (
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
                      onError={() => setFallbackActive(true)}
                    />
                  ) : (
                    <motion.div
                      className="absolute inset-0 w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                    >
                      {!fallbackActive ? (
                        <img
                          ref={(el) => {
                            // Only add non-null elements to the array
                            if (el) imagesRef.current[i] = el;
                          }}
                          src={slide.src}
                          alt="Hero background"
                          className="w-full h-full object-cover"
                          onError={() => setFallbackActive(true)}
                        />
                      ) : (
                        <div 
                          className="w-full h-full bg-gradient-to-r from-gray-900 to-black"
                          style={fallbackStyle}
                        />
                      )}
                    </motion.div>
                  )}
                </ParallaxSection>
              )
            )}
          </AnimatePresence>
        ) : (
          // Loading placeholder
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />

        {/* Foreground content - centered with text reveal */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <TextReveal
            text="Rafan Ahmed"
            className="text-white text-6xl md:text-8xl font-bold leading-tight mb-4"
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