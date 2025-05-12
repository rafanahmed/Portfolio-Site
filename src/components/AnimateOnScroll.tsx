"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  // Additional parameters for fine-tuning animations
  duration?: number;
  distance?: number; // How far the element moves
  direction?: 'up' | 'down' | 'left' | 'right';
  ease?: number[]; // Custom easing function
  once?: boolean; // Whether to animate only once
  margin?: string; // Viewport margin
  style?: React.CSSProperties; // Additional styles
}

export default function AnimateOnScroll({ 
  children, 
  className = "", 
  delay = 0.2,
  duration = 0.7,
  distance,
  direction = 'up',
  ease = [0.22, 1, 0.36, 1], // Custom ease for smooth animation
  once = true,
  margin = "-50px",
  style = {}
}: AnimateOnScrollProps) {
  // Handle mobile responsiveness
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      // Set initial state
      setIsMobile(window.innerWidth < 768);
      
      // Add event listener for resize
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Clean up
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  
  // Determine movement distance based on direction and mobile state
  const getDirectionalMovement = () => {
    // Reduce movement on mobile
    const baseDistance = distance || (isMobile ? 15 : 30);
    
    switch (direction) {
      case 'up':
        return { y: baseDistance };
      case 'down':
        return { y: -baseDistance };
      case 'left':
        return { x: baseDistance };
      case 'right':
        return { x: -baseDistance };
      default:
        return { y: baseDistance };
    }
  };
  
  const directionalMovement = getDirectionalMovement();
  
  // Combine passed-in styles with performance optimization
  const combinedStyles = {
    ...style,
    willChange: 'opacity, transform' // Performance optimization
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionalMovement }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin }}
      transition={{ 
        duration,
        ease, 
        delay 
      }}
      className={className}
      style={combinedStyles}
    >
      {children}
    </motion.div>
  );
}