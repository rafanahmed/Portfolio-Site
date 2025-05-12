"use client";

import { motion, useScroll } from 'framer-motion';

interface ScrollProgressBarProps {
  color?: string;
  height?: number;
  zIndex?: number;
}

export default function ScrollProgressBar({
  color = 'black',
  height = 2,
  zIndex = 50
}: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 origin-left"
      style={{
        height: `${height}px`,
        backgroundColor: color,
        scaleX: scrollYProgress,
        zIndex
      }}
    />
  );
}