"use client";
import AnimateOnScroll from './AnimateOnScroll';
import TextReveal from './TextReveal';
import { motion } from 'framer-motion';

export default function Testimonials() {
    const testimonials = [
      {
        name: "UNC Charlotte CCI",
        role: "Presentation Audience",
        quote: "Rafan's presentation on quantitative trading models turned a complex topic into an accessible learning experience. His ability to explain overfitting risks and validation procedures showed exceptional communication skills."
      },
      {
        name: "Software Engineering Team",
        role: "ITSC 3155 Project",
        quote: "Working with Rafan on our AI Study Assistant was invaluable. His implementation of the Google Gemini integration elevated our project, demonstrating his ability to combine theoretical knowledge with practical solutions."
      },
      {
        name: "Local Mosque Community",
        role: "Eagle Scout Project Beneficiary",
        quote: "Rafan's leadership in planning and constructing our cemetery demonstrated exceptional project management skills. His ability to coordinate volunteers and resources while respecting cultural considerations was remarkable."
      },
    ];

    // Animation for card hover effect
    const cardVariants = {
      initial: { 
        y: 0, 
        boxShadow: "0 0 0 rgba(0,0,0,0)" 
      },
      hover: { 
        y: -10, 
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
      }
    };
    
    // Animation for quote
    const quoteVariants = {
      initial: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
      }
    };
    
    // Animation for attribution
    const attributionVariants = {
      initial: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.6, delay: 0.3 }
      }
    };

    return (
      <section className="bg-gray-50 py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <TextReveal
            text="What my partners say about me"
            className="text-4xl font-bold text-gray-900 mb-16"
            tag="h2"
            wordDelay={0.1}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimateOnScroll 
                key={index} 
                delay={0.2 + index * 0.15} 
                direction="up"
                distance={30}
              >
                <motion.div 
                  className="bg-white p-8 border border-gray-200 h-full rounded-lg"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mb-6"
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="text-gray-300 text-5xl mb-4 font-serif"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      "
                    </motion.div>
                    <motion.p 
                      className="text-gray-600 italic"
                      variants={quoteVariants}
                    >
                      {testimonial.quote}
                    </motion.p>
                  </motion.div>
                  
                  <motion.div
                    variants={attributionVariants}
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="border-t border-gray-100 pt-4"
                  >
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </motion.div>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    );
}