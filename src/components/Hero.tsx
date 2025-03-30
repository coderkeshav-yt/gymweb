
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import HeroImage from '../assets/hero-bg.jpg';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Counter state
  const [counts, setCounts] = useState({
    members: 0,
    trainers: 0,
    classes: 0,
    success: 0
  });
  
  const targetCounts = {
    members: 5000,
    trainers: 20,
    classes: 30,
    success: 95
  };

  useEffect(() => {
    const title = titleRef.current;
    const text = textRef.current;
    const stats = statsRef.current;
    const buttons = buttonRef.current;

    if (title) title.classList.add('animate-fade-in-up');
    
    if (text) {
      setTimeout(() => {
        text.classList.add('animate-fade-in-up');
      }, 200);
    }
    
    if (buttons) {
      setTimeout(() => {
        buttons.classList.add('animate-fade-in-up');
      }, 400);
    }
    
    if (stats) {
      setTimeout(() => {
        stats.classList.add('animate-fade-in-up');
      }, 600);
    }
    
    // Counter animation
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;
      
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        
        setCounts({
          members: Math.floor(progress * targetCounts.members),
          trainers: Math.floor(progress * targetCounts.trainers),
          classes: Math.floor(progress * targetCounts.classes),
          success: Math.floor(progress * targetCounts.success)
        });
        
        if (frame === totalFrames) {
          clearInterval(counter);
          // Ensure final values are exact
          setCounts(targetCounts);
        }
      }, frameDuration);
      
      return () => clearInterval(counter);
    };
    
    // Start counter animation when stats become visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    
    if (stats) {
      observer.observe(stats);
    }
    
    return () => {
      if (stats) observer.disconnect();
    };
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      }}
    >
      {/* Elegant Overlay Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gym-red/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl opacity-0 transform translate-y-8" ref={titleRef}>
          <div className="mb-5 inline-block py-2 px-4 border-l-4 border-gym-red bg-black/30 backdrop-blur-sm">
            <span className="text-white/90 font-medium tracking-wider text-sm md:text-sm uppercase">Darbhanga's Premier Fitness Destination</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 tracking-tight leading-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            ELEVATE YOUR<br />
            FITNESS.<br />
            <span className="text-gym-red">TRANSFORM YOUR<br />LIFE.</span>
          </h1>
          
          <p ref={textRef} className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl font-light leading-relaxed opacity-0 transform translate-y-8">
            Experience premium fitness at Darbhanga's most sophisticated gym facility with state-of-the-art equipment and expert trainers
          </p>
          
          <div ref={buttonRef} className="flex flex-col sm:flex-row items-center gap-4 opacity-0 transform translate-y-8">
            <Button 
              className="bg-gym-red hover:bg-gym-red/90 text-white text-lg font-medium py-6 px-8 rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto"
              onClick={() => scrollToSection('membership')}
            >
              Become a Member
            </Button>
            <Link to="/programs">
              <Button 
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white text-lg font-medium py-6 px-8 rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto"
              >
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Statistics - Improved mobile layout */}
        <div 
          ref={statsRef} 
          className="mt-10 md:mt-16 w-full opacity-0 transform translate-y-8"
        >
          <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-between md:gap-6 max-w-4xl">
            <div className="bg-black/40 backdrop-blur-md p-4 rounded-md border-l-4 border-gym-red hover:shadow-lg hover:border-l-[6px] transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-gym-red mb-1">{counts.members}+</div>
              <div className="text-white/80 text-xs md:text-sm uppercase tracking-wider">Active Members</div>
            </div>
            <div className="bg-black/40 backdrop-blur-md p-4 rounded-md border-l-4 border-gym-red hover:shadow-lg hover:border-l-[6px] transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-gym-red mb-1">{counts.trainers}+</div>
              <div className="text-white/80 text-xs md:text-sm uppercase tracking-wider">Expert Trainers</div>
            </div>
            <div className="bg-black/40 backdrop-blur-md p-4 rounded-md border-l-4 border-gym-red hover:shadow-lg hover:border-l-[6px] transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-gym-red mb-1">{counts.classes}+</div>
              <div className="text-white/80 text-xs md:text-sm uppercase tracking-wider">Weekly Classes</div>
            </div>
            <div className="bg-black/40 backdrop-blur-md p-4 rounded-md border-l-4 border-gym-red hover:shadow-lg hover:border-l-[6px] transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-gym-red mb-1">{counts.success}%</div>
              <div className="text-white/80 text-xs md:text-sm uppercase tracking-wider">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToFeatures}
        className="absolute bottom-8 left-0 right-0 flex justify-center cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Scroll down"
      >
        <div className="animate-bounce bg-gym-red/20 backdrop-blur-sm p-2 rounded-full border border-gym-red/30">
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
