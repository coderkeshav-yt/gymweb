
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProgramsSection from '@/components/ProgramsSection';
import Testimonials from '@/components/Testimonials';
import Schedule from '@/components/Schedule';
import Membership from '@/components/Membership';
import BMICalculator from '@/components/BMICalculator';
import CallToAction from '@/components/CallToAction';
import ContactMap from '@/components/ContactMap';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <div id="programs">
        <ProgramsSection />
      </div>
      <Testimonials />
      <Schedule />
      <div id="membership">
        <Membership />
      </div>
      <BMICalculator />
      <CallToAction />
      <ContactMap />
      <Footer />
    </div>
  );
};

export default Index;
