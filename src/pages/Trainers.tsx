
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const trainers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'CrossFit Coach',
    bio: 'With over 10 years of CrossFit experience, Rajesh specializes in helping members achieve functional fitness through high-intensity workouts. His energetic coaching style pushes you to reach your full potential.',
    expertise: ['CrossFit Level 2 Trainer', 'Olympic Weightlifting', 'Mobility Training', 'Nutrition Coaching'],
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#'
    }
  },
  {
    id: 2,
    name: 'Anjali Singh',
    role: 'Yoga & Flexibility Specialist',
    bio: 'Anjali brings calmness and precision to her yoga and flexibility classes. With her background in traditional and modern yoga practices, she helps members improve mobility, reduce stress, and find balance.',
    expertise: ['200hr Yoga Alliance Certified', 'Meditation', 'Stretch Therapy', 'Mind-Body Connection'],
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#'
    }
  },
  {
    id: 3,
    name: 'Vikram Patel',
    role: 'Strength & Conditioning Coach',
    bio: 'Vikram specializes in strength development and athletic performance. His methodical approach to programming ensures continuous progress while minimizing injury risk for all experience levels.',
    expertise: ['NSCA Certified Strength Coach', 'Sports Performance', 'Functional Movement Screening', 'Powerlifting'],
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#'
    }
  },
  {
    id: 4,
    name: 'Meera Reddy',
    role: 'Cardio & HIIT Specialist',
    bio: "Meera brings incredible energy to her cardio and HIIT classes. Known for her motivational coaching style, she'll push you to break through plateaus and achieve results you never thought possible.",
    expertise: ['ACE Certified Personal Trainer', 'Group Fitness', 'Tabata and HIIT', 'Endurance Training'],
    image: 'https://randomuser.me/api/portraits/women/46.jpg',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#'
    }
  },
  {
    id: 5,
    name: 'Arjun Malhotra',
    role: 'Personal Training Director',
    bio: 'As our Personal Training Director, Arjun oversees all one-on-one coaching and brings 15+ years of experience to our team. His specialties include body transformation and sport-specific training.',
    expertise: ['ISSA Master Trainer', 'Contest Prep', 'Rehabilitation', 'Nutrition Planning'],
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#'
    }
  },
  {
    id: 6,
    name: 'Priya Sharma',
    role: 'Nutrition & Wellness Coach',
    bio: 'Priya combines her nutrition expertise with fitness knowledge to create holistic health plans. She helps members optimize their diet to complement their training for maximum results.',
    expertise: ['Certified Nutritionist', 'Weight Management', 'Meal Planning', 'Lifestyle Coaching'],
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#'
    }
  }
];

const Trainers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Expert Trainers</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/80">
            Meet our team of certified fitness professionals dedicated to your success
          </p>
        </div>
      </section>
      
      {/* Trainers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Fitness Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team of expert trainers brings specialized knowledge and passion to help you achieve your fitness goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{trainer.name}</h3>
                  <p className="text-gym-red font-semibold mb-4">{trainer.role}</p>
                  <p className="text-gray-600 mb-4">{trainer.bio}</p>
                  
                  <h4 className="font-semibold mb-2">Specializations:</h4>
                  <ul className="mb-6">
                    {trainer.expertise.map((skill, index) => (
                      <li key={index} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                        {skill}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <a href={trainer.social.instagram} className="text-gray-500 hover:text-gym-red transition-colors">
                        <Instagram size={18} />
                      </a>
                      <a href={trainer.social.facebook} className="text-gray-500 hover:text-gym-red transition-colors">
                        <Facebook size={18} />
                      </a>
                      <a href={trainer.social.twitter} className="text-gray-500 hover:text-gym-red transition-colors">
                        <Twitter size={18} />
                      </a>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="border-gym-red text-gym-red hover:bg-gym-red hover:text-white"
                    >
                      Book Session
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certification Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Certifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We take pride in our trainers' continuous education and professional development
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'ACE', image: 'https://placehold.co/200x100/eee/777?text=ACE' },
              { name: 'NASM', image: 'https://placehold.co/200x100/eee/777?text=NASM' },
              { name: 'ISSA', image: 'https://placehold.co/200x100/eee/777?text=ISSA' },
              { name: 'CrossFit', image: 'https://placehold.co/200x100/eee/777?text=CrossFit' },
              { name: 'NSCA', image: 'https://placehold.co/200x100/eee/777?text=NSCA' },
              { name: 'Yoga Alliance', image: 'https://placehold.co/200x100/eee/777?text=Yoga+Alliance' },
              { name: 'ACSM', image: 'https://placehold.co/200x100/eee/777?text=ACSM' },
              { name: 'Precision Nutrition', image: 'https://placehold.co/200x100/eee/777?text=Precision+Nutrition' },
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <img src={cert.image} alt={cert.name} className="max-h-20" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Our Team */}
      <section className="py-20 bg-gym-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8">
              Are you a passionate fitness professional looking to make an impact? Be In The Shape is always looking for talented trainers to join our team.
            </p>
            <Button className="bg-gym-red hover:bg-red-700 text-white py-6 px-8">
              Apply Now
            </Button>
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Trainers;
