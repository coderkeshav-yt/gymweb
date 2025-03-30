
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Construction, ArrowLeft } from 'lucide-react';

const WorkInProgress = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { programName } = location.state || { programName: 'This Feature' };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse mb-6 inline-flex bg-gym-red/10 p-4 rounded-full">
            <Construction className="h-16 w-16 text-gym-red" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Work In Progress</h1>
          
          <div className="mb-8 max-w-2xl mx-auto">
            <p className="text-xl text-gray-600 mb-4">
              <span className="font-semibold text-gym-red">{programName}</span> is currently under development.
            </p>
            <p className="text-lg text-gray-500">
              Our team is working hard to bring you an amazing experience. 
              Please check back soon for updates!
            </p>
          </div>
          
          <div className="w-full max-w-xl mx-auto h-8 bg-gray-200 rounded-full overflow-hidden mb-10">
            <div className="h-full bg-gradient-to-r from-gym-red to-red-500 w-[65%] rounded-full flex items-center justify-end">
              <span className="text-xs text-white mr-3">65% Complete</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={() => navigate(-1)} 
              className="flex items-center gap-2 px-6"
              variant="outline"
            >
              <ArrowLeft className="h-4 w-4" /> Go Back
            </Button>
            
            <Button
              onClick={() => navigate('/')}
              className="bg-gym-red hover:bg-gym-red/90 text-white px-6"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default WorkInProgress;
