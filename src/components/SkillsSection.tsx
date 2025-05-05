import React from 'react';
import { Code, Database, Shield, Server } from 'lucide-react';

interface SkillItemProps {
  name: string;
  percentage: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-white font-medium">{name}</h4>
        <span className="text-cyan-400 text-sm">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${percentage}%`,
            animation: 'skill-fill 1.5s ease-out forwards' 
          }}
        ></div>
      </div>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      <div className="mb-4 p-4 bg-gray-900 rounded-full inline-block text-cyan-500">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized in various aspects of cybersecurity and networking, with a focus on protecting digital assets and infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Code className="mr-2 text-cyan-500" /> Technical Skills
              </h3>
              <SkillItem name="Network Security" percentage={90} />
              <SkillItem name="Penetration Testing" percentage={85} />
              <SkillItem name="Vulnerability Assessment" percentage={92} />
              <SkillItem name="SIEM Tools" percentage={80} />
              <SkillItem name="Python Scripting" percentage={75} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Database className="mr-2 text-cyan-500" /> Platforms & Tools
              </h3>
              <SkillItem name="Wireshark" percentage={95} />
              <SkillItem name="Metasploit" percentage={88} />
              <SkillItem name="Nmap" percentage={92} />
              <SkillItem name="Burp Suite" percentage={85} />
              <SkillItem name="Kali Linux" percentage={90} />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-8 text-center">Services Offered</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={<Shield className="h-6 w-6" />}
              title="Security Auditing"
              description="Comprehensive review of security policies, controls, and procedures to identify vulnerabilities and compliance issues."
            />
            <ServiceCard 
              icon={<Server className="h-6 w-6" />}
              title="Network Security"
              description="Design and implementation of secure network architectures with proper segmentation, firewall rules, and access controls."
            />
            <ServiceCard 
              icon={<Code className="h-6 w-6" />}
              title="Penetration Testing"
              description="Simulated cyber attacks to identify and exploit vulnerabilities in systems, networks, and applications."
            />
          </div>

          <div className="mt-16 bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold text-white mb-4">Certifications & Training</h3>
                <p className="text-gray-300 mb-4">
                  Continuously enhancing my skills through professional certifications and specialized training in cybersecurity.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2"></span>
                    Bachelor of Science in Networking and Cybersecurity - ISBAT University
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2"></span>
                    Completed numerous challenges on HackTheBox platform
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2"></span>
                    Active participant in TryHackMe cybersecurity training
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-500 opacity-20 rounded-full transform -rotate-6"></div>
                  <div className="relative bg-gray-900 p-6 rounded-lg border border-gray-700">
                    <div className="text-center">
                      <div className="font-mono text-cyan-500 text-sm mb-2">$ ./skills --count</div>
                      <div className="text-5xl font-bold text-white mb-2">5+</div>
                      <div className="text-gray-400">Years of Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;