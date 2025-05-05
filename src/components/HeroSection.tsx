import React, { useEffect, useRef } from 'react';
import { ArrowDown, Shield } from 'lucide-react';

const HeroSection: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      const text = `
> Starting security scan...
> Initializing...
> Loading profile: LUKANG DENIS DANIEL
> Specialization: Networking & Cybersecurity
> Education: B.Sc. Networking & Cybersecurity, ISBAT University
> Skills loaded successfully
> Security protocols activated
> System ready`;

      let i = 0;
      const typeWriter = () => {
        if (i < text.length && terminalRef.current) {
          terminalRef.current.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, Math.random() * 30 + 20);
        }
      };
      
      typeWriter();
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/20 via-gray-900 to-gray-900"></div>
        <div className="grid-bg absolute inset-0 opacity-20"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left mb-12 md:mb-0">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <Shield className="h-12 w-12 text-purple-500" />
            <div className="bg-purple-500 h-px w-24 ml-4"></div>
          </div>
          
          <div className="md:hidden mb-8">
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 bg-purple-500/20 rounded-full -rotate-6"></div>
              <img 
                src="/profile.jpg" 
                alt="Lukang Denis Daniel"
                className="relative rounded-full w-full h-full object-cover border-4 border-purple-500/30"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
            LUKANG DENIS DANIEL
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-purple-400 font-medium">
            Cybersecurity Specialist
          </h2>
          
          <p className="text-lg text-gray-300 max-w-xl">
            Specialized in network security, penetration testing, and vulnerability assessment. Transforming threats into opportunities for enhanced security.
          </p>
          
          <div className="flex space-x-4 justify-center md:justify-start">
            <button 
              onClick={scrollToAbout}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-all duration-300 flex items-center space-x-2"
            >
              <span>Discover More</span>
              <ArrowDown size={16} />
            </button>
            <button className="px-6 py-3 bg-transparent hover:bg-purple-900/50 text-white font-medium rounded-md transition-all duration-300 border border-purple-500/30">
              My Projects
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="hidden md:block relative w-96 h-96 mr-8">
            <div className="absolute inset-0 bg-purple-500/20 rounded-full -rotate-6"></div>
            <img 
              src="/profile.jpg" 
              alt="Lukang Denis Daniel"
              className="relative rounded-full w-full h-full object-cover border-4 border-purple-500/30"
            />
          </div>
          <div className="w-full max-w-lg bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gray-900/80 px-4 py-2 flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-400 ml-2">terminal@lukang:~</span>
            </div>
            <div className="p-4 h-72 overflow-y-auto bg-gray-900/90">
              <div ref={terminalRef} className="font-mono text-sm text-green-400 whitespace-pre-line"></div>
              <div className="animate-pulse border-r-2 border-green-400 h-4 inline-block"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-purple-400" />
      </div>
    </section>
  );
};

export default HeroSection;