import React from 'react';
import { Shield, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <Shield className="h-8 w-8 text-cyan-500" />
              <span className="ml-2 text-white font-bold text-xl">LDD Security</span>
            </div>
            
            <div className="flex flex-wrap justify-center mb-6 md:mb-0">
              <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="px-4 py-2 text-gray-400 hover:text-white transition-colors">Home</button>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="px-4 py-2 text-gray-400 hover:text-white transition-colors">About</button>
              <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className="px-4 py-2 text-gray-400 hover:text-white transition-colors">Skills</button>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-4 py-2 text-gray-400 hover:text-white transition-colors">Projects</button>
              <button onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })} className="px-4 py-2 text-gray-400 hover:text-white transition-colors">Education</button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-4 py-2 text-gray-400 hover:text-white transition-colors">Contact</button>
            </div>
            
            <div>
              <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-md transition-all duration-300">
                Download CV
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm mb-2">
              &copy; {currentYear} Lukang Denis Daniel. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs flex items-center justify-center">
              Made with <Heart className="h-3 w-3 text-red-500 mx-1" /> using modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;