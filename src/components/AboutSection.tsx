import React from 'react';
import { Shield, Lock, Server, UserCheck } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-gray-900 opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-2/5 mb-12 md:mb-0">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 bg-cyan-500/20 rounded-full absolute -top-6 -left-6"></div>
                <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700 shadow-xl relative z-10 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-sm font-mono opacity-70"># whoami</div>
                    <h3 className="text-xl font-bold">LUKANG DENIS DANIEL</h3>
                    <p className="text-cyan-400 text-sm">Cybersecurity Specialist</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 z-20 bg-gray-800/80 backdrop-blur-sm p-2 rounded border border-gray-700">
                  <Shield className="h-6 w-6 text-cyan-500" />
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/5 md:pl-12">
              <div className="flex items-center mb-4">
                <div className="h-px bg-cyan-500 w-12 mr-4"></div>
                <h2 className="text-cyan-500 font-medium uppercase tracking-wider text-sm">About Me</h2>
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">Cybersecurity Enthusiast & Network Specialist</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm a passionate cybersecurity professional with expertise in network security, ethical hacking, and vulnerability assessment. With a Bachelor's degree in Networking and Cybersecurity from ISBAT University, I've developed a strong foundation in both theoretical knowledge and practical skills. My hands-on experience includes completing numerous challenges on platforms like HackTheBox and TryHackMe, where I've honed my ability to identify and mitigate security threats.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-cyan-900/20 hover:shadow-lg">
                  <Lock className="h-8 w-8 text-cyan-500 mb-4" />
                  <h4 className="text-white font-bold mb-2">Security Analysis</h4>
                  <p className="text-gray-400">Advanced threat detection and vulnerability assessment to protect critical infrastructure.</p>
                </div>
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-cyan-900/20 hover:shadow-lg">
                  <Server className="h-8 w-8 text-cyan-500 mb-4" />
                  <h4 className="text-white font-bold mb-2">Network Security</h4>
                  <p className="text-gray-400">Design and implementation of secure network architectures and protocols.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300 border border-gray-700 flex items-center">
                  <UserCheck className="h-4 w-4 mr-2 text-cyan-500" /> Available for hire
                </div>
                <div className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300 border border-gray-700">Penetration Testing</div>
                <div className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300 border border-gray-700">Network Security</div>
                <div className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300 border border-gray-700">Ethical Hacking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;