"use client";
import { motion, useScroll } from 'framer-motion';

interface ScrollProgressBarProps {
  color?: string;
  height?: number;
  zIndex?: number;
  className?: string;
}

export default function ScrollProgressBar({
  color = 'black',
  height = 2,
  zIndex = 50,
  className = ''
}: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 origin-left ${className}`}
      style={{
        height: `${height}px`,
        backgroundColor: color,
        scaleX: scrollYProgress,
        zIndex: zIndex
      }}
    />
  );
}