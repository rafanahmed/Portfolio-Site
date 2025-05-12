"use client";
// src/components/Carousel.tsx
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const projects = [
  { 
    title: 'QuantConnect RNN Trading', 
    desc: 'SimpleRNN model for SPY trading with 15% CAR, 0.87 Sharpe in backtests.', 
    link: '#qc-rnn',
    tag: 'Machine Learning'
  },
  { 
    title: 'AI Study Assistant', 
    desc: 'Django web app with Google Gemini API integration for personalized learning.', 
    link: '#ai-study',
    tag: 'Full-Stack Development'
  },
  { 
    title: 'Eagle Scout Project', 
    desc: 'Led 20+ volunteers to construct a cemetery for local mosque community.', 
    link: '#eagle-scout',
    tag: 'Project Management'
  },
  { 
    title: 'ML Model Presentations', 
    desc: 'Public speaking on quantitative trading models at UNC Charlotte.', 
    link: '#presentations',
    tag: 'Knowledge Sharing'
  },
];

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      carouselRef.current.scrollTo({
        left: clientWidth * index,
        behavior: 'smooth',
      });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const newIndex = direction === 'left' 
        ? Math.max(0, activeIndex - 1) 
        : Math.min(projects.length - 1, activeIndex + 1);
      
      setActiveIndex(newIndex);
      const { clientWidth } = carouselRef.current;
      carouselRef.current.scrollTo({
        left: clientWidth * newIndex,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    
    const diff = startX - e.clientX;
    carouselRef.current.scrollLeft += diff;
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const newIndex = Math.round(scrollLeft / clientWidth);
      setActiveIndex(newIndex);
      
      carouselRef.current.scrollTo({
        left: clientWidth * newIndex,
        behavior: 'smooth',
      });
    }
  };

  // Handle scroll detection to update active index
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current && !isDragging) {
        const { scrollLeft, clientWidth } = carouselRef.current;
        const newIndex = Math.round(scrollLeft / clientWidth);
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
        }
      }
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeIndex, isDragging]);

  return (
    <section id="projects" className="relative bg-gray-50 py-16 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto relative px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => scroll('left')} 
              className="p-2 border border-gray-300 bg-white disabled:opacity-30 disabled:cursor-not-allowed" 
              disabled={activeIndex === 0}
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="p-2 border border-gray-300 bg-white disabled:opacity-30 disabled:cursor-not-allowed" 
              disabled={activeIndex === projects.length - 1}
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div 
          ref={carouselRef} 
          className="flex overflow-x-hidden snap-x snap-mandatory scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {projects.map((proj, idx) => (
            <div 
              key={proj.title} 
              className="min-w-full w-full flex-shrink-0 snap-center"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-900 rounded-md overflow-hidden relative h-80 md:h-auto">
                  {/* This would normally be an image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-opacity-20 text-4xl font-bold">
                      Project Image {idx + 1}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-white bg-opacity-20 text-white rounded-full mb-3">
                      {proj.tag}
                    </span>
                    <h3 className="text-white text-2xl font-bold mb-2">{proj.title}</h3>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center p-4">
                  <p className="text-gray-700 text-lg mb-6">{proj.desc}</p>
                  <a 
                    href={proj.link} 
                    className="inline-flex items-center text-black border-b border-black pb-1 hover:text-gray-700 hover:border-gray-700 w-fit"
                  >
                    View Project
                    <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === activeIndex ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}