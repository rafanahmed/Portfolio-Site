"use client";
import AnimateOnScroll from './AnimateOnScroll';
import { motion } from 'framer-motion';

export default function SkillsGrid() {
    const skills = [
      {
        category: "Programming & ML",
        items: [
          "Python",
          "TensorFlow",
          "scikit-learn",
          "Pandas/NumPy",
          "Django",
          "REST APIs"
        ]
      },
      {
        category: "Financial Technology",
        items: [
          "Algorithmic Trading",
          "Quantitative Finance",
          "Backtesting",
          "QuantConnect",
          "Time Series Analysis",
          "Risk Management"
        ]
      },
      {
        category: "AI Integration",
        items: [
          "Google Gemini",
          "Generative AI",
          "AI-Assisted Education",
          "Large Language Models",
          "ML Model Deployment",
          "AI Ethics"
        ]
      },
      {
        category: "Professional Skills",
        items: [
          "Project Management",
          "Team Leadership",
          "Public Speaking",
          "Technical Writing",
          "Community Engagement",
          "Problem Solving"
        ]
      }
    ];
  
    // Card animation variants
    const cardVariants = {
      initial: { 
        boxShadow: "0 0 0 rgba(0,0,0,0.1)" 
      },
      hover: { 
        y: -5,
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        transition: { duration: 0.3 }
      }
    };
    
    // Container animation for skill items
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08
        }
      }
    };
    
    // Skill item animation
    const itemVariants = {
      hidden: { opacity: 0, x: -10 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.4 }
      }
    };
  
    return (
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Replace TextReveal with direct motion.h2 to fix spacing issue */}
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Technical Capabilities
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <AnimateOnScroll 
                key={skillGroup.category} 
                delay={0.2 + groupIndex * 0.1} 
                direction={groupIndex % 2 === 0 ? "up" : "down"}
                distance={20}
              >
                <motion.div 
                  className="bg-gray-50 border border-gray-200 p-6 h-full rounded-md"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
                  
                  <motion.ul 
                    className="space-y-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {skillGroup.items.map((skill) => (
                      <motion.li 
                        key={skill} 
                        className="flex items-center text-gray-700"
                        variants={itemVariants}
                        whileHover={{ x: 2 }}
                      >
                        <motion.span 
                          className="w-2 h-2 bg-gray-400 rounded-full mr-2"
                          whileHover={{ scale: 1.5, backgroundColor: "#000" }}
                          transition={{ duration: 0.2 }}
                        />
                        {skill}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    );
}