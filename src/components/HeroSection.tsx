
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Small delay for better visual effect when the page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background color */}
      <div className="absolute inset-0 bg-portfolio-black"></div>
      
      {/* Geometric accent lines */}
      <div className="absolute left-0 top-1/3 bottom-1/3 w-1 bg-portfolio-red/60"></div>
      <div className="absolute left-8 top-1/4 h-32 w-px bg-portfolio-red/30"></div>
      <div className="absolute right-8 bottom-1/4 h-32 w-px bg-portfolio-red/30"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(to right, #333 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="heading-highlight">Your Name</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
              <span className="block">Frontend Developer & UX Designer</span>
              <span className="inline-block mt-2 border-b-2 border-portfolio-blue pb-1">Building digital experiences</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl">
              I craft responsive websites where technology meets creativity. 
              With a strong focus on React and TypeScript, I create innovative solutions
              that provide real business value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work <ArrowRight size={18} />
              </a>
              <a 
                href="#contact"
                className="btn-outline flex items-center justify-center w-full sm:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-60">
        <span className="text-sm mb-2 text-gray-400">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce mt-1"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
