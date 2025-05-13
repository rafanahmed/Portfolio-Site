"use client";
import { motion } from 'framer-motion';

export default function InfoSection() {
  const skills = [
    { skill: 'Machine Learning', desc: 'From accidentally overfitting models to building actually useful ones. TensorFlow and scikit-learn are my trusty companions for creating trading models that sometimes even make money.' },
    { skill: 'Algorithmic Trading', desc: 'My SimpleRNN trading strategies have both impressed and horrified myself, professors, and my quant buddies alike. Learning the hard way about backtesting and overfitting pitfalls so you dont have to.' },
    { skill: 'Full-Stack Development', desc: 'Django REST + Google Gemini = a very nice build for a school software engineering project with 4 other team members. Building apps that help fellow students survive those 3 AM study sessions, student at a time.' },
    { skill: 'Python', desc: 'NumPy/Pandas... What more do I need to say?' },
    { skill: 'Leadership & Communication', desc: 'Translating tech speak into human language, a skill needed for todays Comp Sci majors. I can explain quant trading to both your CS professor and your grandmother.' },
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
          Teaching machines to trade while teaching myself not to crash the market
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
                Still figuring it out, but having fun breaking things along the way
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-lg text-gray-600"
              >
                My journey in tech is an endless pursuit of gnosis – the epiphanic moment when confusion transforms into clarity. Each debugging session, each project mishap, and every breakthrough is another revelation in the constant pursuit of knowledge. I build tools that chase this same feeling – algorithms that learn from mistakes and educational systems that create 'aha!' moments for users. This constant cycle of curiosity, confusion, and clarity drives everything I create, turning complex data into meaningful insights and technical challenges into opportunities for growth. The beauty of tech is that the learning never stops – and I wouldn't have it any other way.
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
              <img 
                src="/Images/PXL_20250501_183900446.MP.jpg"
                alt="Descriptive alt text for accessibility"
                width={500}
                height={300}
                className="object-cover rounded-md"
              />
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}