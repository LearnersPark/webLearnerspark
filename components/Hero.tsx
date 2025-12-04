import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { TacticalScene } from './3d/TacticalSphere';
import { ChevronDown, Shield, BookOpen, Target } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-navy-950 flex items-center justify-center pt-32 pb-12 lg:pt-0 lg:pb-0">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <TacticalScene />
        </Canvas>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-3"
          >
            <Shield className="text-gold-500 w-6 h-6" />
            <span className="text-gold-400 font-bold tracking-widest uppercase text-sm">
              Ex-DRDO • Educator
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-serif text-white leading-tight"
          >
            Aman Saroj <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-200">
              Gopal
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl font-medium text-gold-100 font-serif border-l-4 border-gold-500 pl-4 py-1"
          >
            Shaping Futures Through Excellence in Defense Education
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-300 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Bridging the gap between rigorous military discipline and academic innovation to empower the next generation of officers.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a href="#contact" className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-sm transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)]">
              Get Mentorship
            </a>
            <a href="#about" className="px-8 py-3 border border-slate-600 hover:border-gold-500 text-slate-300 hover:text-gold-400 rounded-sm transition-all">
              View Journey
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 text-slate-400 pt-8"
          >
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-gold-500" />
              <span className="text-sm font-medium">B.Sc, M.Sc, B.Ed</span>
            </div>
            <div className="flex items-center gap-2">
              <Target size={18} className="text-gold-500" />
              <span className="text-sm font-medium">NDA & CDSE Cracked</span>
            </div>
          </motion.div>
        </div>

        {/* Profile Image (Simulated 3D Frame) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <div className="relative w-80 h-96 md:w-96 md:h-[500px]">
            {/* Decorative Borders */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold-500/30 rounded-lg" />
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-slate-500/30 rounded-lg" />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl bg-navy-800 group">
              <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay z-10" />
              <img 
                src="/aman-profile.jpg" 
                alt="Aman Saroj Gopal" 
                className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Radar Scan Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/10 to-transparent h-[20%] w-full animate-scan z-20 pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 text-slate-400 hidden lg:block"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
