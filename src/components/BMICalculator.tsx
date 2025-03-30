
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const BMICalculator = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>('');
  const [isCalculated, setIsCalculated] = useState<boolean>(false);

  const calculateBMI = () => {
    if (!height || !weight) return;
    
    const heightInMeters = Number(height) / 100;
    const weightInKg = Number(weight);
    
    if (heightInMeters <= 0 || weightInKg <= 0) return;
    
    const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
    setBmi(Number(calculatedBMI.toFixed(1)));
    setIsCalculated(true);
    
    // Set BMI category
    if (calculatedBMI < 18.5) {
      setBmiCategory('Underweight');
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
      setBmiCategory('Normal weight');
    } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
      setBmiCategory('Overweight');
    } else {
      setBmiCategory('Obesity');
    }
  };

  const resetCalculator = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setBmiCategory('');
    setIsCalculated(false);
  };

  return (
    <section className="py-20 bg-gym-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-white">BMI Calculator</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Monitor your health status with our easy-to-use BMI calculator
            </p>
          </div>
          
          <div className="bg-gym-darkGray rounded-xl p-8 md:p-12">
            {!isCalculated ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Label htmlFor="height" className="text-white">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="175"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="bg-white/10 border-gray-700 text-white"
                  />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="weight" className="text-white">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="bg-white/10 border-gray-700 text-white"
                  />
                </div>
                <div className="md:col-span-2">
                  <Button 
                    onClick={calculateBMI}
                    className="w-full bg-gym-red hover:bg-red-700 text-white py-6"
                    disabled={!height || !weight}
                  >
                    Calculate BMI
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <div className="bg-white/5 rounded-lg p-8 inline-block">
                  <h3 className="text-xl mb-2">Your BMI:</h3>
                  <div className="text-5xl font-bold text-gym-red mb-2">{bmi}</div>
                  <div className="text-xl">{bmiCategory}</div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">BMI Categories:</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                    <div className="bg-blue-900/30 p-3 rounded">
                      <div className="font-bold">Under 18.5</div>
                      <div>Underweight</div>
                    </div>
                    <div className="bg-green-900/30 p-3 rounded">
                      <div className="font-bold">18.5 - 24.9</div>
                      <div>Normal weight</div>
                    </div>
                    <div className="bg-yellow-900/30 p-3 rounded">
                      <div className="font-bold">25 - 29.9</div>
                      <div>Overweight</div>
                    </div>
                    <div className="bg-red-900/30 p-3 rounded">
                      <div className="font-bold">30 or higher</div>
                      <div>Obesity</div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={resetCalculator}
                  className="bg-white/10 hover:bg-white/20 text-white"
                >
                  Calculate Again
                </Button>
              </div>
            )}
          </div>
          
          <div className="mt-8 text-white/80 text-sm text-center">
            <p>
              BMI is a measure of body fat based on height and weight. It's a screening tool, but not a diagnostic of health or body fatness.
            </p>
            <p className="mt-2">
              Consult with our fitness professionals for a comprehensive assessment of your health and fitness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
