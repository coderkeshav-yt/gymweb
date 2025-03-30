
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';

const programs = [
  {
    id: 'weight-training',
    title: 'Weight Training',
    description: "Our comprehensive weight training program is designed to build strength, increase muscle mass, and improve overall physical performance. Whether you're a beginner or an experienced lifter, our expert trainers will guide you through proper technique and progressive overload principles.",
    benefits: [
      'Increased muscle mass and strength',
      'Enhanced metabolism and fat burning',
      'Improved bone density',
      'Better posture and reduced injury risk',
      'Greater functional strength for daily activities'
    ],
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    color: 'bg-gym-black'
  },
  {
    id: 'crossfit',
    title: 'CrossFit',
    description: 'Our CrossFit program combines high-intensity functional movements that will push your limits and transform your fitness. Each class includes a warm-up, skill development, the workout of the day (WOD), and a cool-down stretch, all led by our certified CrossFit coaches.',
    benefits: [
      'Improved cardiovascular endurance',
      'Enhanced power, agility, and flexibility',
      'Full-body workout efficiency',
      'Supportive community atmosphere',
      'Constantly varied workouts to prevent plateaus'
    ],
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    color: 'bg-gym-red'
  },
  {
    id: 'yoga',
    title: 'Yoga & Flexibility',
    description: 'Our yoga program focuses on enhancing flexibility, strength, and mental clarity through mindful movement and breath control. Classes range from gentle restorative sessions to more challenging power flows, suitable for all experience levels.',
    benefits: [
      'Increased flexibility and joint mobility',
      'Improved balance and stability',
      'Reduced stress and anxiety',
      'Enhanced mind-body connection',
      'Complement to other training modalities'
    ],
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    color: 'bg-gym-black'
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    description: 'Our one-on-one personal training sessions offer customized workout plans tailored to your specific goals, fitness level, and preferences. Our certified trainers provide expert guidance, motivation, and accountability to help you achieve optimal results.',
    benefits: [
      'Fully customized workout programs',
      'Proper technique guidance to prevent injuries',
      'Consistent motivation and accountability',
      'Faster and more efficient results',
      'Nutritional guidance and lifestyle advice'
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    color: 'bg-gym-red'
  },
  {
    id: 'hiit',
    title: 'HIIT Circuit Training',
    description: 'Our High-Intensity Interval Training (HIIT) circuit combines explosive cardio with strength exercises in timed intervals for maximum calorie burn and cardiovascular benefits in minimal time. These fast-paced, energetic sessions keep your heart rate elevated throughout.',
    benefits: [
      'Maximum calorie burn in minimal time',
      'Continued fat burning post-workout (EPOC effect)',
      'Improved cardiovascular health',
      'No equipment variations available',
      'Scalable for all fitness levels'
    ],
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    color: 'bg-gym-black'
  },
  {
    id: 'cardio',
    title: 'Cardio & Endurance',
    description: 'Our cardio and endurance program focuses on improving your heart health, stamina, and overall endurance. From structured running sessions to cycling, rowing, and more, these workouts will elevate your cardiovascular fitness to new heights.',
    benefits: [
      'Improved heart health and circulation',
      'Enhanced lung capacity and oxygen efficiency',
      'Increased stamina for daily activities',
      'Effective weight management',
      'Reduced risk of chronic diseases'
    ],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    color: 'bg-gym-red'
  },
];

const Programs = () => {
  const navigate = useNavigate();
  
  const handleJoinClass = (programTitle: string) => {
    navigate('/work-in-progress', { state: { programName: programTitle } });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/80">
            Discover our comprehensive range of fitness programs designed to help you reach your goals
          </p>
        </div>
      </section>
      
      {/* Program List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Transform Your Body, Transform Your Life</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse range of programs ensures there's something for everyone, regardless of fitness level or goals
            </p>
          </div>
          
          <div className="space-y-24">
            {programs.map((program, index) => (
              <div 
                key={program.id}
                id={program.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={`${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <h2 className="text-3xl font-bold mb-6 relative inline-block">
                    {program.title}
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gym-red"></span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {program.description}
                  </p>
                  
                  <h4 className="text-xl font-semibold mb-4">Benefits:</h4>
                  <ul className="space-y-2 mb-8">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-gym-red mr-2 font-bold">•</div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`${program.color} hover:opacity-90 text-white py-6 px-8`}
                    onClick={() => handleJoinClass(program.title)}
                  >
                    Join {program.title} Class
                  </Button>
                </div>
                
                <div className="relative">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                  />
                  <div className={`absolute -bottom-5 ${index % 2 !== 0 ? '-left-5' : '-right-5'} ${program.color} text-white py-3 px-6 rounded`}>
                    <div className="text-lg font-bold">Starting at ₹1,999/month</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Specialty Classes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Specialty Classes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Limited-time and seasonal programs to keep your fitness journey exciting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "30-Day Transformation",
                description: "Intensive 30-day program combining training, nutrition, and accountability for rapid results.",
                startDate: "Starts 1st of every month",
                image: "https://images.unsplash.com/photo-1606889464198-fcb18894cf50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Senior Fitness",
                description: "Specialized training for 60+ focusing on mobility, functional strength, and balance.",
                startDate: "Tuesdays & Thursdays @ 10AM",
                image: "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Sport-Specific Training",
                description: "Custom programs for athletes looking to enhance performance in their specific sport.",
                startDate: "By appointment",
                image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="text-sm text-gym-red font-semibold mb-4">
                    {program.startDate}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-gym-red text-gym-red hover:bg-gym-red hover:text-white"
                    onClick={() => navigate('/work-in-progress', { state: { programName: program.title } })}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Programs;
