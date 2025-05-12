"use client";
import { motion } from 'framer-motion';

export default function InfoSection() {
  const skills = [
    { skill: 'Machine Learning', desc: 'TensorFlow, scikit-learn for model development in quantitative trading and AI applications.' },
    { skill: 'Algorithmic Trading', desc: 'QuantConnect platform experience with SimpleRNN architectures, backtesting, and strategy validation.' },
    { skill: 'Full-Stack Development', desc: 'Django REST Framework, Google Gemini API integration, Git/GitHub version control.' },
    { skill: 'Python', desc: 'Data analysis, scientific computing with NumPy/Pandas, and AI model implementation.' },
    { skill: 'Leadership & Communication', desc: 'Project management, public speaking, and teaching complex technical concepts to diverse audiences.' },
  ];

  return (
    <section id="skills" className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-20 max-w-3xl"
        >
          My software powers AI-driven decisions in quantitative trading and educational technology
        </motion.h2>
        
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-medium text-gray-900 mb-12"
          >
            My Technical Skills
          </motion.h3>
          
          <div className="space-y-16">
            {skills.map(({ skill, desc }, index) => (
              <motion.div 
                key={skill}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 md:items-center"
              >
                <h3 className="text-2xl font-medium text-black w-full md:w-1/4">{skill}</h3>
                <p className="text-gray-600 md:w-3/4">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-gray-900"
              >
                There is so much left to build
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-lg text-gray-600"
              >
                I'm dedicated to transforming technical expertise into meaningful, real-world impact. 
                My journey in tech is fueled by a profound curiosity—a personal mantra centered on 
                the continuous stream of gnosis: always learning, iterating, and refining with each project. 
                My goal is to develop systems that empower users—delivering smarter decisions, measurable value, 
                and open, transparent AI tools.
              </motion.p>
              
              <motion.a 
                href="#contact" 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 inline-block bg-black text-white px-6 py-3 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                LEARN MORE
              </motion.a>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-96 bg-gray-100 rounded-md"
            >
              {/* Placeholder for a relevant image */}
              <div className="h-full flex items-center justify-center text-gray-400">
                [Project Image/Video]
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}