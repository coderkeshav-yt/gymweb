
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              BE<span className="text-gym-red">IN</span>THE<span className="text-gym-red">SHAPE</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Premium fitness center in Darbhanga providing state-of-the-art equipment and expert training to help you achieve your fitness goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gym-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gym-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gym-red transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 relative pl-3 border-l-4 border-gym-red">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-gym-red transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-gym-red transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-gym-red transition-colors">Programs</Link></li>
              <li><Link to="/trainers" className="text-gray-400 hover:text-gym-red transition-colors">Trainers</Link></li>
              <li><Link to="/membership" className="text-gray-400 hover:text-gym-red transition-colors">Membership</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gym-red transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4 relative pl-3 border-l-4 border-gym-red">
              Hours of Operation
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-between text-gray-400">
                <span>Monday - Friday:</span>
                <span>5:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Saturday:</span>
                <span>6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Sunday:</span>
                <span>8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex text-gray-400 mt-4 items-center">
                <Clock size={16} className="mr-2 flex-shrink-0" />
                <span>Members with Premium & Elite have 24/7 access</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 relative pl-3 border-l-4 border-gym-red">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex text-gray-400">
                <MapPin size={20} className="mr-2 flex-shrink-0 text-gym-red" />
                <span>123 Fitness Street, Near City Center, Darbhanga, Bihar 846001</span>
              </li>
              <li className="flex text-gray-400">
                <Phone size={20} className="mr-2 flex-shrink-0 text-gym-red" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex text-gray-400">
                <Mail size={20} className="mr-2 flex-shrink-0 text-gym-red" />
                <span>info@beintheshape.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Be In The Shape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
