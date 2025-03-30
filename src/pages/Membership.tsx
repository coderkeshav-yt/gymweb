
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Membership from '@/components/Membership';
import CallToAction from '@/components/CallToAction';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from 'lucide-react';

const MembershipPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Membership Plans</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/80">
            Find the perfect membership option to start your fitness journey
          </p>
        </div>
      </section>
      
      {/* Membership Plans */}
      <Membership />
      
      {/* Facilities */}
      <section className="py-20 bg-gym-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">Premium Facilities</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Experience fitness in a state-of-the-art environment designed for optimal results
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Cardio Zone',
                  description: 'Latest treadmills, ellipticals, bikes, and steppers',
                  image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                },
                {
                  title: 'Strength Area',
                  description: 'Comprehensive free weights and machine selection',
                  image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                },
                {
                  title: 'Functional Zone',
                  description: 'Open area for dynamic and functional training',
                  image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                },
                {
                  title: 'Group Studios',
                  description: 'Dedicated spaces for yoga, HIIT, and group classes',
                  image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                }
              ].map((facility, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg h-48">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white mb-1">{facility.title}</h3>
                    <p className="text-white/80 text-sm">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gym-darkGray p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 relative inline-block">
                Amenities by Membership Level
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gym-red"></span>
              </h3>
              
              <Tabs defaultValue="premium" className="w-full">
                <TabsList className="grid grid-cols-3 mb-8">
                  <TabsTrigger 
                    value="basic"
                    className="data-[state=active]:bg-gym-red data-[state=active]:text-white"
                  >
                    Basic
                  </TabsTrigger>
                  <TabsTrigger 
                    value="premium"
                    className="data-[state=active]:bg-gym-red data-[state=active]:text-white"
                  >
                    Premium
                  </TabsTrigger>
                  <TabsTrigger 
                    value="elite"
                    className="data-[state=active]:bg-gym-red data-[state=active]:text-white"
                  >
                    Elite
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="basic" className="space-y-4">
                  {[
                    'Gym access (6 AM - 10 PM)',
                    'Cardio equipment access',
                    'Strength equipment access',
                    'Locker use during workout',
                    'Free water bottle',
                    'Mobile app access',
                    '1 guest pass per month'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-gym-red mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="premium" className="space-y-4">
                  {[
                    '24/7 gym access',
                    'All Basic features',
                    'Group fitness classes (2 per week)',
                    '1 session with personal trainer',
                    'Dedicated locker',
                    'Towel service',
                    'Sauna access',
                    'Free protein shake per week',
                    '3 guest passes per month'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-gym-red mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="elite" className="space-y-4">
                  {[
                    'All Premium features',
                    'Unlimited group fitness classes',
                    '4 sessions with personal trainer monthly',
                    'Nutrition consultation',
                    'Monthly progress tracking',
                    'Premium locker with amenities',
                    'Sauna & recovery area access',
                    'Unlimited guest passes',
                    'Priority class booking',
                    'Exclusive member events'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-gym-red mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our membership options
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {[
                {
                  question: 'Is there a joining fee?',
                  answer: 'Yes, there is a one-time joining fee of ₹1,000. However, we often run promotions where this fee is waived. Check our current offers for details.'
                },
                {
                  question: 'Can I freeze my membership if needed?',
                  answer: 'Yes, members can freeze their membership for up to 30 days per year with a valid reason such as medical issues, travel, or work commitments. A small administrative fee may apply.'
                },
                {
                  question: 'Do you offer family or corporate discounts?',
                  answer: 'Yes, we offer family packages with discounted rates for multiple members. We also have corporate partnerships with many local businesses. Inquire at reception for more details.'
                },
                {
                  question: 'What is your cancellation policy?',
                  answer: 'Memberships require a 30-day written notice for cancellation. Any unused personal training sessions or class passes will remain valid until their expiration date.'
                },
                {
                  question: 'Do you offer student discounts?',
                  answer: 'Yes, we offer a 10% discount on all membership plans for students with a valid ID. This discount cannot be combined with other promotional offers.'
                },
                {
                  question: 'Can I upgrade my membership plan?',
                  answer: 'Yes, you can upgrade your membership at any time. The price difference will be prorated for the remainder of your billing cycle. Talk to our membership team for assistance.'
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default MembershipPage;
