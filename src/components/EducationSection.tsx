import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Shield, Server } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-800 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-gray-900 opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-cyan-500 w-12 mr-4"></div>
              <h2 className="text-cyan-500 font-medium uppercase tracking-wider text-sm">Education</h2>
              <div className="h-px bg-cyan-500 w-12 ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Academic Background</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My formal education and continuous learning journey in the field of cybersecurity.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch gap-12">
            <div className="w-full md:w-1/2">
              <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-cyan-500/20 rounded-lg mr-4">
                      <GraduationCap className="h-6 w-6 text-cyan-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Bachelor of Science</h3>
                      <p className="text-cyan-400">Networking and Cybersecurity</p>
                    </div>
                  </div>
                  
                  <div className="mb-6 pb-6 border-b border-gray-700">
                    <div className="flex items-center mb-2 text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>ISBAT University, Kampala, Uganda</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Graduated with Honors</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-bold mb-4">Key Courses</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2 mt-2"></span>
                        <span>Network Security & Architecture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2 mt-2"></span>
                        <span>Ethical Hacking & Penetration Testing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2 mt-2"></span>
                        <span>Cryptography & Secure Communications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2 mt-2"></span>
                        <span>Digital Forensics & Incident Response</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2 mt-2"></span>
                        <span>Security Policies & Risk Management</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-6">
                    <p className="text-gray-400 italic">
                      "Specialized in network security with a focus on practical applications and vulnerability assessment techniques."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-cyan-500/20 rounded-lg mr-4">
                      <Award className="h-6 w-6 text-cyan-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Professional Training</h3>
                      <p className="text-cyan-400">Continuous Education</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-bold mb-4">Platforms & Certifications</h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                        <div className="flex items-center mb-3">
                          <Shield className="h-5 w-5 text-green-500 mr-2" />
                          <h5 className="text-lg font-bold text-white">HackTheBox Training</h5>
                        </div>
                        <p className="text-gray-400 text-sm">
                          Completed numerous challenges demonstrating practical exploitation skills, privilege escalation, and post-exploitation techniques on the HackTheBox platform.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                        <div className="flex items-center mb-3">
                          <Server className="h-5 w-5 text-red-500 mr-2" />
                          <h5 className="text-lg font-bold text-white">TryHackMe Learning Path</h5>
                        </div>
                        <p className="text-gray-400 text-sm">
                          Actively participated in structured learning paths and rooms focusing on offensive security, defensive security, and general cybersecurity concepts.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6 pb-6 border-b border-gray-700">
                    <h4 className="text-white font-bold mb-4">Achievements</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2 mt-2"></span>
                        <span>Top 10% performer on HackTheBox platform</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2 mt-2"></span>
                        <span>Completed Advanced Network Security track on TryHackMe</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2 mt-2"></span>
                        <span>Led university cybersecurity awareness program</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-6">
                    <div className="flex justify-center">
                      <div className="px-6 py-3 bg-gray-800 rounded-lg border border-gray-700 text-center">
                        <p className="text-gray-400 text-sm mb-1">Continuous Learning Philosophy</p>
                        <p className="text-cyan-400 font-mono">"Stay curious, stay secure."</p>
                      </div>
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

export default EducationSection;