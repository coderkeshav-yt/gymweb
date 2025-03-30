
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gym-red text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Start Your Fitness Journey Today
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join Be In The Shape now and transform your body with Darbhanga's premier fitness facility
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-gym-red hover:bg-gray-200 text-lg py-6 px-8 btn-pulse">
            Get 7-Day Free Trial
          </Button>
          <Button className="bg-transparent border-2 border-white hover:bg-white/10 text-white text-lg py-6 px-8">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
