
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/80">
            Discover the journey behind Darbhanga's premier fitness destination
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">Our Journey</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2015, Be In The Shape began with a simple mission: to bring world-class fitness facilities to Darbhanga. Our founder, Amit Kumar, a nationally acclaimed fitness trainer, returned to his hometown with a vision to transform the fitness landscape of the region.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small gym with limited equipment has now evolved into a comprehensive fitness center spanning over 15,000 square feet, equipped with state-of-the-art machines, dedicated training areas, and premium amenities.
              </p>
              <p className="text-lg text-gray-600">
                Over the years, we've helped thousands of members achieve their fitness goals, transforming not just bodies but lives. Today, we stand as the leading fitness destination in Darbhanga, continuing our commitment to health, wellness, and community.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
                alt="Gym Interior" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gym-red text-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold">8+</div>
                <div className="text-lg">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision */}
      <section className="py-20 bg-gym-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gym-darkGray p-10 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 relative inline-block">
                Our Mission
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gym-red"></span>
              </h3>
              <p className="text-white/80 mb-6">
                To create a fitness community that empowers individuals to transform their bodies, enhance their health, and elevate their quality of life through expert guidance, supportive environment, and world-class facilities.
              </p>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="text-gym-red mr-2">•</span>
                  <span>Providing access to premium fitness equipment and facilities</span>
                </li>
                <li className="flex">
                  <span className="text-gym-red mr-2">•</span>
                  <span>Delivering expert coaching and personalized guidance</span>
                </li>
                <li className="flex">
                  <span className="text-gym-red mr-2">•</span>
                  <span>Creating a supportive community of like-minded individuals</span>
                </li>
                <li className="flex">
                  <span className="text-gym-red mr-2">•</span>
                  <span>Promoting holistic wellness beyond physical training</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gym-darkGray p-10 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 relative inline-block">
                Our Vision
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gym-red"></span>
              </h3>
              <p className="text-white/80 mb-6">
                To be recognized as the most trusted fitness destination in Bihar, known for transforming lives through innovative programs, exceptional service, and a passionate commitment to our members' success.
              </p>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="text-gym-red mr-2">•</span>
                  <span>Expand our reach to help more people achieve fitness excellence</span>
                </li>
                <li className="flex">
                  <span className="text-gym-red mr-2">•</span>
                  <span>Pioneer fitness innovations in our region</span>
                </li>
                <li className="flex">
                  <span className="text-gym-red mr-2">•</span>
                  <span>Develop the next generation of fitness professionals</span>
                </li>
                <li className="flex">
                  <span className="text-gym-red mr-2">•</span>
                  <span>Create a positive impact on the health of our community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experts behind Be In The Shape's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Amit Kumar",
                role: "Founder & Head Coach",
                bio: "National-level bodybuilder with 15+ years of training experience. ISSA Certified Personal Trainer.",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Priya Sharma",
                role: "Nutrition Specialist",
                bio: "Certified nutritionist with specialization in sports nutrition and weight management programs.",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Rajiv Singh",
                role: "Operations Manager",
                bio: "Former corporate executive who ensures our gym runs smoothly, delivering premium service to all members.",
                image: "https://randomuser.me/api/portraits/men/62.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gym-red font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gym-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the difference at Be In The Shape. Start your fitness journey with us today!
          </p>
          <Button className="bg-white text-gym-red hover:bg-gray-100 text-lg py-6 px-8">
            Book a Free Trial
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
