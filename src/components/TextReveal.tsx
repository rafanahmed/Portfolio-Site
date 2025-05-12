"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  wordDelay?: number; // Delay between each word
  initialDelay?: number; // Initial delay before animation starts
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'; // HTML tag to use
  once?: boolean; // Whether to animate only once
}

export default function TextReveal({
  text,
  className = '',
  wordDelay = 0.1,
  initialDelay = 0,
  tag = 'p',
  once = true
}: TextRevealProps) {
  // Make sure there are spaces in the text by adding spaces between words that might be missing them
  const processedText = text.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  // Split text into words
  const words = processedText.split(' ').filter(word => word.trim() !== '');
  
  // Create variants for container animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: wordDelay
      }
    }
  };
  
  // Create variants for word animation
  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  // Dynamically render the appropriate tag
  const Container = motion[tag];
  
  return (
    <Container
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{ delay: initialDelay }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block"
        >
          {word}{' '}
        </motion.span>
      ))}
    </Container>
  );
}