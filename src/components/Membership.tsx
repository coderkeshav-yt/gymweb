import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Basic',
    price: '1,499',
    duration: 'month',
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      'Gym access (6 AM - 10 PM)',
      'Basic fitness assessment',
      'Access to standard equipment',
      'Free water bottle',
      '1 guest pass per month',
    ],
    color: 'border-gray-200 hover:border-gray-300',
    recommended: false,
  },
  {
    name: 'Premium',
    price: '2,999',
    duration: 'month',
    description: 'Most popular choice for dedicated fitness enthusiasts',
    features: [
      '24/7 gym access',
      'Complete fitness assessment',
      'Access to all equipment & areas',
      '2 group classes per week',
      '1 session with personal trainer',
      'Locker access',
      'Free protein shake per week',
      '3 guest passes per month',
    ],
    color: 'border-gym-red scale-105',
    background: 'bg-gym-red/5',
    textColor: 'text-gym-red',
    recommended: true,
  },
  {
    name: 'Elite',
    price: '4,999',
    duration: 'month',
    description: 'The ultimate fitness experience for maximum results',
    features: [
      'Everything in Premium plan',
      'Unlimited group classes',
      '4 sessions with personal trainer',
      'Nutrition consultation',
      'Monthly progress tracking',
      'Premium locker access',
      'Towel service',
      'Sauna & recovery area access',
      'Unlimited guest passes',
    ],
    color: 'border-gray-200 hover:border-gray-300',
    recommended: false,
  },
];

const Membership = () => {
  return (
    <section id="membership" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Membership Plans</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your fitness goals and budget
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "border-2 rounded-xl overflow-hidden transition-all duration-300 relative",
                plan.color,
                plan.background || 'bg-white'
              )}
            >
              {plan.recommended && (
                <div className="absolute top-0 inset-x-0 bg-gym-red text-white text-center py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="p-8 pt-12">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">₹{plan.price}</span>
                  <span className="text-gray-500">/{plan.duration}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className={cn("h-5 w-5 mr-2 flex-shrink-0", plan.textColor || "text-green-500")} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={cn(
                    "w-full py-6",
                    plan.recommended 
                      ? "bg-gym-red hover:bg-red-700 text-white" 
                      : "bg-black hover:bg-gym-darkGray text-white"
                  )}
                >
                  Choose {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-4">All plans include free access to the Be In The Shape mobile app</p>
          <p>Yearly memberships available with 2 months free - Contact us for details</p>
        </div>
      </div>
    </section>
  );
};

export default Membership;
