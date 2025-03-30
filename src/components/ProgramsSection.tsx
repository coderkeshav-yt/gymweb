
import React from 'react';
import { Rocket, Dumbbell, Flame, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const programs = [
  {
    name: 'Strength Training',
    description: 'Build muscle and increase your overall strength with our comprehensive strength training program.',
    icon: Dumbbell,
    benefits: [
      'Increased muscle mass',
      'Improved bone density',
      'Enhanced physical performance',
      'Reduced risk of injury',
    ],
    schedule: 'Monday, Wednesday, Friday - 6:00 PM',
  },
  {
    name: 'Cardio Fitness',
    description: 'Improve your cardiovascular health and burn calories with our high-energy cardio program.',
    icon: Zap,
    benefits: [
      'Improved heart health',
      'Increased endurance',
      'Weight loss',
      'Reduced stress',
    ],
    schedule: 'Tuesday, Thursday - 7:00 AM',
  },
  {
    name: 'Yoga & Flexibility',
    description: 'Enhance your flexibility, reduce stress, and improve your overall well-being with our yoga program.',
    icon: Flame,
    benefits: [
      'Increased flexibility',
      'Reduced stress',
      'Improved balance',
      'Enhanced mental clarity',
    ],
    schedule: 'Tuesday, Thursday - 8:00 PM',
  },
  {
    name: 'HIIT (High-Intensity Interval Training)',
    description: 'Get a full-body workout in a short amount of time with our high-intensity interval training program.',
    icon: Rocket,
    benefits: [
      'Efficient calorie burn',
      'Improved cardiovascular health',
      'Increased metabolism',
      'Enhanced endurance',
    ],
    schedule: 'Saturday - 9:00 AM',
  },
];

const ProgramsSection = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const handleLearnMore = (programName: string) => {
    navigate('/work-in-progress', { state: { programName } });
  };
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of fitness programs designed to help you achieve your goals
          </p>
        </div>
        
        <div id="programs" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-gym-red text-4xl mb-4 flex justify-center md:justify-start">
                <program.icon size={isMobile ? 36 : 40} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center md:text-left">{program.name}</h3>
              <p className="text-gray-600 mb-4 text-center md:text-left">{program.description}</p>
              
              <h4 className="text-lg font-semibold mb-2 text-center md:text-left">Benefits:</h4>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {program.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-center md:text-left">{benefit}</li>
                ))}
              </ul>
              
              <p className="text-gray-600 mb-4 text-center md:text-left">
                <span className="font-semibold">Schedule:</span> {program.schedule}
              </p>
              
              <Button
                className="w-full bg-gym-red hover:bg-gym-red/90 text-white"
                onClick={() => handleLearnMore(program.name)}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
