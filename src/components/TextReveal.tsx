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
  // Add spaces between words if missing (e.g., "RafanAhmed" -> "Rafan Ahmed")
  const addSpaces = (text: string): string => {
    return text
      // Add spaces between lowercase followed by uppercase (camelCase)
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // Add spaces between uppercase letters followed by uppercase + lowercase
      .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
      // Clean up any double spaces that might have been created
      .replace(/\s+/g, ' ')
      .trim();
  };

  // Process the text to ensure proper spacing
  const processedText = addSpaces(text);
  
  // Split text into words, ensuring no empty strings
  const words = processedText.split(' ').filter(word => word.length > 0);
  
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
  const Container = motion[tag as keyof typeof motion];
  
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