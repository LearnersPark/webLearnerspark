import React from 'react';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 border-t border-navy-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-sm">© 2024 Aman Saroj Gopal. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <span className="text-slate-300 text-sm font-medium">Contact Developer of this Website</span>
            <a 
              href="mailto:mohansinghdhakrey01@gmail.com"
              className="flex items-center gap-2 text-gold-500 hover:text-gold-400 font-semibold transition-colors"
            >
              <Mail className="w-4 h-4" />
              mohansinghdhakrey01@gmail.com
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-500 text-xs">Crafted with precision & innovation</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
