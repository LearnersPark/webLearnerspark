import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Ventures } from './components/Ventures';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageCircle, ArrowUp } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-navy-950 min-h-screen text-slate-200 selection:bg-gold-500 selection:text-navy-950">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Timeline />
        <Ventures />
        <section className="py-24 bg-navy-900 relative">
            {/* Vision Banner */}
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-3xl font-serif text-white mb-6">"Empowering minds. Building futures. Serving the nation."</h3>
                <div className="h-1 w-16 bg-gold-500 mx-auto rounded-full" />
            </div>
        </section>
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="p-3 bg-navy-800 text-white rounded-full shadow-lg border border-slate-700 hover:border-gold-500 transition-all hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        )}
        <a 
          href="https://wa.me/919009829888" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-4 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/20 hover:bg-green-600 transition-all hover:-translate-y-1 animate-pulse-slow"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </div>
  );
}

export default App;
