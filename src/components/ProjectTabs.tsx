"use client";
// src/components/ProjectTabs.tsx
import { useState } from 'react';
import Link from 'next/link';

const projects = [
  { id: 'qc-rnn', name: 'QuantConnect RNN Trading', description: 'SimpleRNN-based model for SPY trading strategy using TensorFlow.' },
  { id: 'ai-study', name: 'AI Study Assistant', description: 'Django web app with Google Gemini API integration for academic support.' },
  { id: 'eagle-scout', name: 'Eagle Scout Project', description: 'Cemetery construction project for local mosque community.' },
  { id: 'presentations', name: 'ML Model Presentations', description: 'Public speaking on quantitative trading models and lessons learned.' },
  { id: 'future', name: 'Future Endeavors', description: 'Upcoming projects in machine learning and finance.' },
];

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState('qc-rnn');

  return (
    <section className="bg-gray-50 py-12 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="overflow-x-auto whitespace-nowrap pb-4 scrollbar-hide">
          <div className="inline-flex space-x-4">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveTab(project.id)}
                className={`px-4 py-2 text-sm whitespace-nowrap rounded ${
                  activeTab === project.id 
                    ? 'bg-gray-100 text-black font-medium' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {project.name}
              </button>
            ))}
            <button className="px-4 py-2 text-sm whitespace-nowrap text-gray-600 hover:text-black">
              SEE ALL
            </button>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative h-96 rounded-md overflow-hidden bg-gray-900">
            <img 
              src={`/project-${activeTab}.jpg`} 
              alt={projects.find(p => p.id === activeTab)?.name || 'Project'} 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback for missing images
                e.currentTarget.src = '/default-project.jpg';
              }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-3xl font-bold">
                {projects.find(p => p.id === activeTab)?.name}
              </h3>
              <p className="text-gray-200 mt-2 text-lg">
                {projects.find(p => p.id === activeTab)?.description}
              </p>
              <Link 
                href={`#${activeTab}`} 
                className="mt-6 inline-flex items-center text-white"
              >
                View Details 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-md flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900">
              {activeTab === 'qc-rnn' && 'Turning Trading Model Failures into Educational Success'}
              {activeTab === 'ai-study' && 'Enhancing Learning with Google Gemini Integration'}
              {activeTab === 'eagle-scout' && 'Leading Cross-Community Collaboration'}
              {activeTab === 'presentations' && 'Teaching Quantitative Finance Principles'}
              {activeTab === 'future' && 'Building AI That Respects Logic and Intuition'}
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              {activeTab === 'qc-rnn' && 'SimpleRNN architecture with walk-forward training on SPY price data (Mar-May 2025). Initially promising backtest results (15% CAR, 0.87 Sharpe), but uncovered critical overfitting issues from lookahead bias that became valuable learning lessons.'}
              {activeTab === 'ai-study' && 'Team project (ITSC 3155) developing a Django-based web application integrating Google\'s Gemini API for intelligent academic support. Features modular content sections and an AI endpoint for real-time, interactive responses to student queries.'}
              {activeTab === 'eagle-scout' && 'Led 20+ volunteers to plan and construct a cemetery for a mosque community in Charlotte. Managed all aspects of project planning, fundraising, and execution, demonstrating leadership across different community groups.'}
              {activeTab === 'presentations' && 'Presented "Balancing ML Models in Quantitative Trading" at UNC Charlotte\'s College of Computing and Informatics, sharing insights about overfitting, validation procedures, and realistic model assumptions.'}
              {activeTab === 'future' && 'Actively seeking internship opportunities in machine learning, algorithmic trading, generative AI, and transformative FinTech spaces. Committed to developing systems that empower users with transparent AI tools.'}
            </p>
            <Link 
              href={`#${activeTab}`} 
              className="mt-8 inline-flex items-center text-black border-b border-black pb-1"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}