"use client";
import Link from 'next/link';
import { useState } from 'react';
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-black text-xl font-semibold">
          <span className="inline-flex items-center">
            <span className="text-3xl mr-2">○</span> Rafan Ahmed
          </span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link 
            href="#contact" 
            className="border border-black text-black font-normal px-6 py-2 transition-colors hover:bg-black hover:text-white"
          >
            Get Started
          </Link>
          
          <button 
            className="p-2 border border-gray-200" 
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          
          <button 
            onClick={() => setOpen(!open)} 
            aria-label="Menu" 
            className="p-2 border border-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="grid grid-cols-4 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Projects</h3>
                <ul className="space-y-2">
                  <li><Link href="#qc-rnn" className="text-gray-600 hover:text-black">QuantConnect RNN Trading</Link></li>
                  <li><Link href="#ai-study" className="text-gray-600 hover:text-black">AI Study Assistant</Link></li>
                  <li><Link href="#eagle-scout" className="text-gray-600 hover:text-black">Eagle Scout Project</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Technical Skills</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-600 hover:text-black">Machine Learning</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-black">Algorithmic Trading</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-black">Full-Stack Development</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Technologies</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-600 hover:text-black">Python, TensorFlow</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-black">Django, REST APIs</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-black">Google Gemini</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-4">About Me</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-600 hover:text-black">Presenter & Educator</Link></li>
                  <li><Link href="/resume.pdf" className="text-gray-600 hover:text-black">Resume</Link></li>
                  <li><Link href="mailto:rafan.ahmed@uncc.edu" className="text-gray-600 hover:text-black">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}