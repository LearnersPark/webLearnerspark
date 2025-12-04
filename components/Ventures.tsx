import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { ExternalLink, Rocket, Users, Building2, Globe } from 'lucide-react';
import { Platform } from '../types';

export const Ventures: React.FC = () => {
  const platforms: Platform[] = [
    {
      name: "Learner's Park",
      role: "Founder",
      description: "A comprehensive educational platform dedicated to defense examination preparation. Democratizing defense coaching across geographical boundaries.",
      highlight: true
    },
    {
      name: "Sabre Officers Defence Academy",
      role: "Expert Faculty",
      description: "Contributing expertise to one of the leading defense coaching institutions, shaping the minds of future officers.",
    },
    {
      name: "Abhilasha Classes",
      role: "Strategic Partner",
      description: "Bringing quality defense preparation to the historic city of Gwalior.",
    },
    {
      name: "Scindia Research Centre",
      role: "Advisor",
      description: "Fostering research and analytical thinking among defense aspirants.",
    }
  ];

  return (
    <section id="platforms" className="py-24 bg-navy-900">
      <div className="container mx-auto px-6">
        <SectionHeading title="Impact & Initiatives" subtitle="Platforms" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-2xl overflow-hidden group ${
                platform.highlight 
                  ? 'bg-gradient-to-br from-navy-800 to-navy-900 border border-gold-500/30' 
                  : 'bg-navy-800 border border-navy-700'
              }`}
            >
              {/* Background Glow for Highlighted Card */}
              {platform.highlight && (
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-gold-500/20 rounded-full blur-3xl group-hover:bg-gold-500/30 transition-all" />
              )}

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-lg ${platform.highlight ? 'bg-gold-500 text-navy-900' : 'bg-navy-950 text-gold-500'}`}>
                    {index === 0 ? <Rocket size={24} /> : index === 1 ? <Building2 size={24} /> : <Users size={24} />}
                  </div>
                  {platform.link && <ExternalLink size={20} className="text-slate-500 hover:text-gold-500 cursor-pointer" />}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                  {platform.name}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full bg-navy-950 text-xs font-semibold text-slate-300 mb-4 w-max border border-navy-700">
                  {platform.role}
                </span>
                
                <p className="text-slate-400 leading-relaxed flex-grow">
                  {platform.description}
                </p>

                {platform.highlight && (
                  <div className="mt-6 pt-6 border-t border-navy-700/50">
                    <span className="flex items-center text-sm text-gold-400 font-medium">
                      <Globe size={16} className="mr-2" /> Flagship Venture
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};