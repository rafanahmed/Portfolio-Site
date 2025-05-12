"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  strength?: number; // How strong the parallax effect is (higher = more movement)
  direction?: 'up' | 'down'; // Direction of parallax movement
  startOffset?: number; // Starting position offset (0-1)
  endOffset?: number; // Ending position offset (0-1)
}

export default function ParallaxSection({
  children,
  className = "",
  strength = 100, // Default strength
  direction = 'up',
  startOffset = 0,
  endOffset = 1
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Calculate the movement range based on direction
  const yRange = direction === 'up' 
    ? [strength, -strength] 
    : [-strength, strength];
  
  // Transform the scroll progress into Y position
  const y = useTransform(
    scrollYProgress, 
    [startOffset, endOffset], 
    yRange
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div 
        style={{ y }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}