"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  wordDelay?: number;
  initialDelay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  once?: boolean;
}

export default function TextReveal({
  text,
  className = '',
  wordDelay = 0.1,
  initialDelay = 0,
  tag = 'p',
  once = true
}: TextRevealProps) {
  // Properly format text by ensuring spaces are preserved
  const formattedText = text
    // Add spaces between camelCase text
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // Add spaces between joined words (if no spaces present)
    .replace(/([a-zA-Z])([a-zA-Z])/g, function(match, p1, p2) {
      // Only add space if not already spaced
      return /\s/.test(match) ? match : p1 + ' ' + p2;
    })
    // Replace multiple spaces with a single space
    .replace(/\s+/g, ' ')
    .trim();
  
  // Split text into words, ensuring no empty strings
  const words = formattedText.split(' ').filter(word => word.length > 0);
  
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
  
  // For debugging purposes, log the words array
  console.log('Formatted text:', formattedText);
  console.log('Words array:', words);
  
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