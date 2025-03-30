
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Kumar',
    role: 'Member for 2 years',
    quote: "Be In The Shape transformed my life! I lost 25kg in just 6 months with their expert trainers and supportive community. The facilities are world-class and the trainers truly care about your progress.",
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Priya Singh',
    role: 'Member for 1 year',
    quote: "As a working professional, I needed a gym that could accommodate my busy schedule. The 24/7 access and variety of classes has made fitness a consistent part of my lifestyle. I've never felt stronger!",
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Vikram Patel',
    role: 'Member for 3 years',
    quote: "The personal training at Be In The Shape is exceptional. My trainer understood my goals and created a program that worked for me. The results speak for themselves - I'm in the best shape of my life at 45.",
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gym-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Success Stories</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Real results from real members who made the commitment to transform
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="relative z-10 bg-gym-darkGray p-8 md:p-12 rounded-lg">
            <div className="mb-8 flex flex-col md:flex-row items-center md:items-start gap-6">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gym-red object-cover"
              />
              <div>
                <p className="text-lg md:text-xl italic mb-6">"{testimonials[currentIndex].quote}"</p>
                <div>
                  <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-gym-red">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end gap-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={prevTestimonial}
                className="bg-transparent border border-white/20 text-white hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={nextTestimonial}
                className="bg-transparent border border-white/20 text-white hover:bg-white/10"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-gym-red rounded-lg -z-10"></div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-gym-red' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
