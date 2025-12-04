import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { TimelineEvent } from '../types';
import { Anchor, Plane, Award, Briefcase, Zap } from 'lucide-react';

export const Timeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      year: '2016',
      title: 'NDA Recommendation',
      description: 'Marked the beginning of the defense journey by clearing the prestigious National Defence Academy examination, proving leadership potential.',
      icon: Anchor,
      tags: ['NDA', 'Leadership']
    },
    {
      year: '2017',
      title: 'Defense Examination Sweep',
      description: 'Demonstrated versatility by clearing major non-commissioned exams including Airforce X & Y, Navy AA & SSR, and Indian Coast Guard.',
      icon: Plane,
      tags: ['Airforce', 'Navy', 'ICG']
    },
    {
      year: '2018 - 2020',
      title: 'Officer Level Success',
      description: 'Consistently cracked high-level officer examinations: CDSE (Combined Defence Services) and AFCAT (Air Force Common Admission Test).',
      icon: Award,
      tags: ['CDSE', 'AFCAT']
    },
    {
      year: 'Professional',
      title: 'DRDO Scientist',
      description: 'Served at the Defense Research and Development Organisation. Gained hands-on experience in national security protocols and defense technology.',
      icon: Briefcase,
      tags: ['Research', 'Technology', 'Service']
    },
    {
      year: 'Present',
      title: 'Education Entrepreneur',
      description: "Founded Learner's Park and collaborating with premier institutes like Sabre Officers Defence Academy to mentor the next generation.",
      icon: Zap,
      tags: ['Mentorship', 'Innovation']
    }
  ];

  return (
    <section id="journey" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 skew-x-12 blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Service & Excellence" subtitle="The Journey" />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 via-slate-700 to-navy-900 transform md:-translate-x-1/2" />

          <div className="space-y-16">
            {events.map((event, index) => {
              const Icon = event.icon || Award;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center md:justify-between ${
                    isEven ? 'flex-row' : 'flex-row md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-navy-950 border-4 border-gold-500 rounded-full z-20 transform -translate-x-1/2" />

                  {/* Spacer for mobile alignment */}
                  <div className="w-16 md:hidden flex-shrink-0" />

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-navy-800 p-6 rounded-xl border border-navy-700 hover:border-gold-500/50 transition-all shadow-lg hover:shadow-2xl hover:shadow-gold-500/10 group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gold-400 font-bold text-lg">{event.year}</span>
                        <Icon className="text-slate-500 group-hover:text-gold-500 transition-colors" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded bg-navy-950 text-slate-300 border border-navy-700">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty Space for alignment */}
                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};