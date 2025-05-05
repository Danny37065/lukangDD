import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, User, Briefcase, Code, GraduationCap, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-cyan-500" />
            <span className="ml-2 text-white font-bold text-xl">LDDSecurity</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</button>
              <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Education</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            <User size={18} /> Home
          </button>
          <button onClick={() => scrollToSection('about')} className="flex items-center gap-2 text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            <User size={18} /> About
          </button>
          <button onClick={() => scrollToSection('skills')} className="flex items-center gap-2 text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            <Code size={18} /> Skills
          </button>
          <button onClick={() => scrollToSection('projects')} className="flex items-center gap-2 text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            <Briefcase size={18} /> Projects
          </button>
          <button onClick={() => scrollToSection('education')} className="flex items-center gap-2 text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            <GraduationCap size={18} /> Education
          </button>
          <button onClick={() => scrollToSection('contact')} className="flex items-center gap-2 text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            <Mail size={18} /> Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;