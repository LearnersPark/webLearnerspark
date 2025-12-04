import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-navy-950 pt-24 pb-12 border-t border-navy-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-12">
          
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
              Ready to Shape Your Future?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Whether you're an NDA aspirant or seeking mentorship, connect with Aman Saroj Gopal today.
              Join the league of excellence.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
             <a 
              href="https://wa.me/919009829888" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <a 
              href="mailto:amansaroj2304@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-navy-800 hover:bg-navy-700 text-white rounded-lg font-bold border border-navy-700 transition-all"
            >
              <Mail size={20} />
              Send Email
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-navy-900">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-navy-900 rounded-full text-gold-500">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-sm text-slate-500">Call Directly</div>
              <div className="text-white font-medium">+91 90098 29888</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-navy-900 rounded-full text-gold-500">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-sm text-slate-500">Email Address</div>
              <div className="text-white font-medium">amansaroj2304@gmail.com</div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-navy-900 rounded-full text-gold-500">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-sm text-slate-500">Location</div>
              <div className="text-white font-medium">India (Gwalior / Pan-India)</div>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-navy-900 text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Aman Saroj Gopal. All rights reserved.</p>
          <p className="mt-2">Built with Excellence & Integrity.</p>
        </div>
      </div>
    </footer>
  );
};
