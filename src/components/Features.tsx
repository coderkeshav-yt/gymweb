
import React from 'react';
import { Dumbbell, Clock, Users, Calendar, Trophy, Star } from 'lucide-react';

const features = [
  {
    icon: <Dumbbell className="h-12 w-12 text-gym-red" />,
    title: 'Modern Equipment',
    description: 'State-of-the-art fitness equipment for every muscle group',
  },
  {
    icon: <Clock className="h-12 w-12 text-gym-red" />,
    title: 'Open 24/7',
    description: 'Train on your schedule with round-the-clock access',
  },
  {
    icon: <Users className="h-12 w-12 text-gym-red" />,
    title: 'Expert Trainers',
    description: 'Certified fitness professionals to guide your journey',
  },
  {
    icon: <Calendar className="h-12 w-12 text-gym-red" />,
    title: 'Group Classes',
    description: 'Energizing group workouts for all fitness levels',
  },
  {
    icon: <Trophy className="h-12 w-12 text-gym-red" />,
    title: 'Results Guaranteed',
    description: 'Proven programs designed for maximum results',
  },
  {
    icon: <Star className="h-12 w-12 text-gym-red" />,
    title: 'Premium Amenities',
    description: 'Luxurious facilities including sauna and recovery area',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gym-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Be In The Shape, we provide everything you need to achieve your fitness goals in a premium environment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
