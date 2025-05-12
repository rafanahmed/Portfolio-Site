"use client";
import AnimateOnScroll from './AnimateOnScroll';
import TextReveal from './TextReveal';
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
        <TextReveal
          text="My software powers AI-driven decisions in quantitative trading and educational technology"
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-20 max-w-3xl"
          tag="h2"
          wordDelay={0.05}
          initialDelay={0.2}
        />
        
        <div className="mt-16">
          <AnimateOnScroll delay={0.3} direction="up" distance={15}>
            <h3 className="text-xl font-medium text-gray-900 mb-12">My Technical Skills</h3>
          </AnimateOnScroll>
          
          <div className="space-y-16">
            {skills.map(({ skill, desc }, index) => (
              <AnimateOnScroll 
                key={skill} 
                delay={0.3 + index * 0.1} 
                direction={index % 2 === 0 ? "left" : "right"} 
                distance={20}
              >
                <motion.div 
                  className="flex flex-col md:flex-row gap-8 md:items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-medium text-black w-full md:w-1/4">{skill}</h3>
                  <p className="text-gray-600 md:w-3/4">{desc}</p>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
        
        <div className="mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <TextReveal
                text="There is so much left to build"
                className="text-4xl font-bold text-gray-900"
                tag="h2"
                wordDelay={0.1}
              />
              
              <AnimateOnScroll delay={0.4} direction="up" distance={15}>
                <p className="mt-6 text-lg text-gray-600">
                  I'm dedicated to transforming technical expertise into meaningful, real-world impact. My journey in tech is fueled by a profound curiosity—a personal mantra centered on the continuous stream of gnosis: always learning, iterating, and refining with each project. My goal is to develop systems that empower users—delivering smarter decisions, measurable value, and open, transparent AI tools.
                </p>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={0.5} direction="up" distance={15}>
                <motion.a 
                  href="#contact" 
                  className="mt-8 inline-block bg-black text-white px-6 py-3 font-medium"
                  whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  LEARN MORE
                </motion.a>
              </AnimateOnScroll>
            </div>
            
            <AnimateOnScroll delay={0.6} direction="left" distance={30}>
              <motion.div 
                className="h-96 bg-gray-100 rounded-md overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder for a relevant image */}
                <div className="h-full flex items-center justify-center text-gray-400">
                  [Project Image/Video]
                </div>
              </motion.div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}