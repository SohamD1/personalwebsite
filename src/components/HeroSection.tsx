import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

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
      
      {/* Bold red lines on both sides */}
      <div className="absolute left-0 top-1/3 bottom-1/3 w-1 bg-portfolio-red/60"></div>
      <div className="absolute right-0 top-1/3 bottom-1/3 w-1 bg-portfolio-red/60"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(to right, #333 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center mb-6">
              {/* Profile Photo Avatar with hover spin animation */}
              <Avatar className="h-16 w-16 mr-4 transition-all duration-500 hover:rotate-[360deg] border-2 border-portfolio-red shadow-lg">
                <AvatarImage src="/passportphoto.png" alt="Profile Photo" />
                <AvatarFallback className="bg-portfolio-red text-white text-xl">YN</AvatarFallback>
              </Avatar>
              
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm <span className="heading-highlight">Soham Dave</span>
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
  <span className="relative inline-block mt-2 pb-1">
    Engineering @ U Waterloo
    <span className="absolute bottom-0 left-0 h-[2px] bg-portfolio-blue w-0 animate-slide-in"></span>
  </span>
</h2>

            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl">
              Blending AI, data, and software engineering to craft high-performance applications with React, TypeScript, and Python
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#experience" 
                className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
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
    </section>
  );
};

export default HeroSection;
