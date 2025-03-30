
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ClassType = {
  time: string;
  name: string;
  trainer: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
};

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const scheduleData: Record<string, ClassType[]> = {
  'Monday': [
    { time: '06:00 - 07:00', name: 'Morning CrossFit', trainer: 'Rajesh K.', level: 'All Levels' },
    { time: '08:00 - 09:00', name: 'Power Yoga', trainer: 'Anjali S.', level: 'Beginner' },
    { time: '18:00 - 19:00', name: 'HIIT Circuit', trainer: 'Vikram P.', level: 'Intermediate' },
    { time: '19:30 - 20:30', name: 'Strength Training', trainer: 'Arjun M.', level: 'Advanced' },
  ],
  'Tuesday': [
    { time: '07:00 - 08:00', name: 'Spin Class', trainer: 'Meera R.', level: 'All Levels' },
    { time: '09:00 - 10:00', name: 'Body Pump', trainer: 'Vikram P.', level: 'Intermediate' },
    { time: '17:30 - 18:30', name: 'Functional Training', trainer: 'Rajesh K.', level: 'All Levels' },
    { time: '19:00 - 20:00', name: 'Boxing', trainer: 'Arjun M.', level: 'Intermediate' },
  ],
  'Wednesday': [
    { time: '06:00 - 07:00', name: 'Morning CrossFit', trainer: 'Rajesh K.', level: 'All Levels' },
    { time: '08:00 - 09:00', name: 'Pilates', trainer: 'Anjali S.', level: 'Beginner' },
    { time: '18:00 - 19:00', name: 'Zumba', trainer: 'Meera R.', level: 'All Levels' },
    { time: '19:30 - 20:30', name: 'Power Lifting', trainer: 'Arjun M.', level: 'Advanced' },
  ],
  'Thursday': [
    { time: '07:00 - 08:00', name: 'Spin Class', trainer: 'Meera R.', level: 'All Levels' },
    { time: '09:00 - 10:00', name: 'Kettlebell Circuit', trainer: 'Vikram P.', level: 'Intermediate' },
    { time: '17:30 - 18:30', name: 'Core Strength', trainer: 'Anjali S.', level: 'All Levels' },
    { time: '19:00 - 20:00', name: 'MMA Conditioning', trainer: 'Arjun M.', level: 'Advanced' },
  ],
  'Friday': [
    { time: '06:00 - 07:00', name: 'Morning CrossFit', trainer: 'Rajesh K.', level: 'All Levels' },
    { time: '08:00 - 09:00', name: 'Yoga Flow', trainer: 'Anjali S.', level: 'All Levels' },
    { time: '18:00 - 19:00', name: 'HIIT Circuit', trainer: 'Vikram P.', level: 'Intermediate' },
    { time: '19:30 - 20:30', name: 'Strength & Conditioning', trainer: 'Arjun M.', level: 'Intermediate' },
  ],
  'Saturday': [
    { time: '08:00 - 09:00', name: 'Weekend Warrior', trainer: 'Vikram P.', level: 'All Levels' },
    { time: '10:00 - 11:00', name: 'Yoga', trainer: 'Anjali S.', level: 'All Levels' },
    { time: '16:00 - 17:00', name: 'CrossFit Open Gym', trainer: 'Rajesh K.', level: 'All Levels' },
  ],
  'Sunday': [
    { time: '09:00 - 10:00', name: 'Meditation & Stretching', trainer: 'Anjali S.', level: 'All Levels' },
    { time: '11:00 - 12:00', name: 'Functional Training', trainer: 'Vikram P.', level: 'All Levels' },
  ],
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('Monday');

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Class Schedule</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our group classes led by expert trainers to maximize your fitness journey
          </p>
        </div>
        
        <Tabs defaultValue={activeDay} onValueChange={setActiveDay} className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {weekDays.map((day) => (
              <TabsTrigger 
                key={day} 
                value={day}
                className="data-[state=active]:bg-gym-red data-[state=active]:text-white"
              >
                {day}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {weekDays.map((day) => (
            <TabsContent key={day} value={day} className="rounded-lg border">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trainer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {scheduleData[day].map((cls, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cls.time}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{cls.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cls.trainer}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getLevelColor(cls.level)}`}>
                            {cls.level}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Schedule;
