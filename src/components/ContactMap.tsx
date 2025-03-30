
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactMap = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're here to help with any questions about our programs, memberships, or facilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <ul className="space-y-6">
                <li className="flex">
                  <div className="bg-gym-red/10 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-gym-red" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Our Location</h4>
                    <p className="text-gray-600">123 Fitness Street, Near City Center, Darbhanga, Bihar 846001</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-gym-red/10 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-gym-red" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Phone Number</h4>
                    <p className="text-gray-600">+91 9876543210</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-gym-red/10 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-gym-red" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email Address</h4>
                    <p className="text-gray-600">info@beintheshape.com</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-gym-red/10 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-gym-red" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Working Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 5:00 AM - 12:00 AM</p>
                    <p className="text-gray-600">Saturday: 6:00 AM - 10:00 PM</p>
                    <p className="text-gray-600">Sunday: 8:00 AM - 8:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Google Map */}
            <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28641.743081700725!2d85.86789907431642!3d26.16027379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edcd33692e3c5d%3A0x88448b7edb8d5880!2sDarbhanga%2C%20Bihar%2C%20India!5e0!3m2!1sen!2sus!4v1622134514896!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Be In The Shape Location"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  placeholder="+91 9876543210"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Membership Inquiry"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Please type your message here..."
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gym-red hover:bg-red-700 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
