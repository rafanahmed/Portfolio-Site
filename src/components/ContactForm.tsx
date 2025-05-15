"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

// Social media links
const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rafan-ahmed/',
    icon: '/Images/LinkedIn_icon.png',
    color: 'bg-blue-50 hover:bg-blue-100'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/rafanahmed',
    icon: '/Images/GitHub-logo1.png',
    color: 'bg-gray-50 hover:bg-gray-100'
  },
  {
    name: 'X',
    url: 'https://x.com/gnosismaxxing',
    icon: '/Images/X-logo.png',
    color: 'bg-black hover:bg-gray-900 text-white'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/r0xis',
    icon: '/Images/Instagram_icon.png',
    color: 'bg-pink-50 hover:bg-pink-100',
  },
];

const youtubeLink = {
  name: 'Youtube',
  url: 'https://www.youtube.com/@gnosismaxxing',
  icon: '/Images/YouTubeLogo.png',
  color: 'bg-red-50 hover:bg-red-100'
};


export default function ContactForm() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <section id="contact" className="bg-gray-50 py-20 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Follow and Connect with me!
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((social) => (
            <motion.div 
              key={social.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <Link 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-16 h-16 rounded-full ${social.color} flex items-center justify-center mb-3 transition-transform shadow-md hover:shadow-lg`}
              >
                <img 
                  src={social.icon} 
                  alt={social.name} 
                  className="w-8 h-8 object-contain" 
                />
              </Link>
              <span className="text-gray-700">{social.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="bg-gray-100 p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Fun fact, I make EDM music! If you want to listen:
          </h3>
          <Link 
            href="https://open.spotify.com/artist/0NTfRmZBiFPXIt1JtXIine?si=WzRbvKfmSHuaiz3ehE-gnQ" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md shadow-md transition-transform hover:translate-y-[-2px]"
          >
            <img 
              src="/Images/Spotify_Primary_Logo_RGB_Green.png" 
              alt="Spotify" 
              className="w-5 h-5 mr-2" 
            />
            Listen on Spotify
          </Link>
        </motion.div>
      </div>
    </section>
  );
}