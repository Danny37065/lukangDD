import React, { useState } from 'react';
import { Github, ExternalLink, Lock, Server, Shield, AlertTriangle } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  platform: 'hackthebox' | 'tryhackme' | 'personal';
  difficulty: 'easy' | 'medium' | 'hard';
  skills: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Network Intrusion Detection System",
    category: "Network Security",
    description: "Implemented a custom NIDS using Suricata and ELK stack for real-time threat detection and analysis.",
    image: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    platform: "personal",
    difficulty: "hard",
    skills: ["Suricata", "ELK Stack", "Python", "Network Security"],
    link: "#"
  },
  {
    id: 2,
    title: "Lame",
    category: "Penetration Testing",
    description: "HTB machine focusing on SMB vulnerabilities and privilege escalation techniques in Linux environments.",
    image: "https://images.pexels.com/photos/60504/security-protection-privacy-policy-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    platform: "hackthebox",
    difficulty: "easy",
    skills: ["SMB Exploitation", "Metasploit", "Linux Privileges"]
  },
  {
    id: 3,
    title: "Blue",
    category: "Vulnerability Assessment",
    description: "HTB challenge exploiting the EternalBlue vulnerability in Windows systems, highlighting the importance of patch management.",
    image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    platform: "hackthebox",
    difficulty: "medium",
    skills: ["EternalBlue", "Windows Exploitation", "MS17-010"]
  },
  {
    id: 4,
    title: "Basic Pentesting",
    category: "Web Security",
    description: "TryHackMe room covering the fundamentals of penetration testing, including reconnaissance, exploitation, and privilege escalation.",
    image: "https://images.pexels.com/photos/211151/pexels-photo-211151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    platform: "tryhackme",
    difficulty: "easy",
    skills: ["Web App Testing", "Brute Force", "Linux Enumeration"]
  },
  {
    id: 5,
    title: "Wireless Network Security Assessment",
    category: "Wireless Security",
    description: "Comprehensive assessment of wireless network security, including WPA2 vulnerabilities and rogue access point detection.",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    platform: "personal",
    difficulty: "medium",
    skills: ["Wireless Security", "Aircrack-ng", "Evil Twin Attacks"],
    link: "#"
  },
  {
    id: 6,
    title: "Pickle Rick",
    category: "Web Exploitation",
    description: "TryHackMe challenge based on the Rick and Morty theme, focusing on web application vulnerabilities and command injection.",
    image: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    platform: "tryhackme",
    difficulty: "easy",
    skills: ["Web Exploitation", "Command Injection", "Privilege Escalation"]
  },
];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.platform === filter || project.category.toLowerCase() === filter.toLowerCase());

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch(platform) {
      case 'hackthebox': return <Shield className="h-4 w-4" />;
      case 'tryhackme': return <Server className="h-4 w-4" />;
      case 'personal': return <Lock className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getPlatformName = (platform: string) => {
    switch(platform) {
      case 'hackthebox': return 'HackTheBox';
      case 'tryhackme': return 'TryHackMe';
      case 'personal': return 'Personal Project';
      default: return 'Other';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-cyan-500 w-12 mr-4"></div>
              <h2 className="text-cyan-500 font-medium uppercase tracking-wider text-sm">Portfolio</h2>
              <div className="h-px bg-cyan-500 w-12 ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of my work on various cybersecurity platforms including HackTheBox, TryHackMe, and personal projects.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'all' ? 'bg-cyan-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('hackthebox')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'hackthebox' ? 'bg-cyan-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              HackTheBox
            </button>
            <button 
              onClick={() => setFilter('tryhackme')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'tryhackme' ? 'bg-cyan-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              TryHackMe
            </button>
            <button 
              onClick={() => setFilter('personal')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'personal' ? 'bg-cyan-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              Personal Projects
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-70"></div>
                  <div className="absolute top-4 left-4 flex items-center">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs text-white ${project.platform === 'hackthebox' ? 'bg-green-600' : project.platform === 'tryhackme' ? 'bg-red-600' : 'bg-cyan-600'}`}>
                      {getPlatformIcon(project.platform)}
                      <span>{getPlatformName(project.platform)}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-3 h-3 rounded-full ${getDifficultyColor(project.difficulty)}`}></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                        +{project.skills.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400 capitalize">
                      {project.difficulty} Difficulty
                    </span>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan-500 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-md transition-all duration-300 border border-gray-700"
            >
              <Github className="mr-2 h-5 w-5" />
              <span>View More Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;