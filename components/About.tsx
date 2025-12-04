import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { GraduationCap, Award, Brain, Briefcase } from 'lucide-react';

export const About: React.FC = () => {
  const education = [
    { degree: "Master of Science (M.Sc)", label: "Specialized Knowledge" },
    { degree: "Bachelor of Science (B.Sc)", label: "Scientific Foundation" },
    { degree: "Bachelor of Education (B.Ed)", label: "Pedagogical Expertise" }
  ];

  const highlights = [
    { icon: Award, title: "Defense Excellence", desc: "Recommended for NDA (2016). Cleared CDSE, AFCAT, Navy & Airforce exams." },
    { icon: Briefcase, title: "Former DRDO", desc: "Served at India's premier defense research organization, gaining technical insights." },
    { icon: Brain, title: "Analytical Approach", desc: "Combining scientific acumen with strategic defense preparation methods." }
  ];

  return (
    <section id="about" className="py-24 bg-navy-900 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="The Architect of Dreams" subtitle="About Aman" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Biography */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              In the realm of defense examination preparation, few names carry the weight of experience 
              and dedication quite like Aman Saroj Gopal. With a unique blend of academic prowess and 
              a distinguished defense background, he stands as a beacon of inspiration for thousands.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              His journey from being an NDA-recommended candidate to a scientist at DRDO, and now an 
              education entrepreneur, embodies the spirit of service—first to the nation through defense, 
              and now to future generations through education.
            </p>
            
            <div className="pt-6">
              <h3 className="text-gold-400 font-semibold mb-4 flex items-center gap-2">
                <GraduationCap /> Academic Foundation
              </h3>
              <div className="space-y-3">
                {education.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-navy-800 rounded-lg border border-navy-700 hover:border-gold-500/50 transition-colors"
                  >
                    <div className="h-2 w-2 bg-gold-500 rounded-full" />
                    <div>
                      <div className="text-white font-medium">{edu.degree}</div>
                      <div className="text-slate-400 text-sm">{edu.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-navy-800 p-8 rounded-xl border-l-4 border-gold-500 shadow-lg hover:shadow-gold-500/10 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-navy-950 rounded-lg text-gold-500 group-hover:scale-110 transition-transform">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
