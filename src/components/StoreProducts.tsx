
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

// Product categories
const categories = [
  'All',
  'Protein',
  'Pre-Workout',
  'Mass Gainers',
  'BCAA & EAA',
  'Weight Management',
  'Vitamins'
];

// Product data
const products = [
  {
    id: 1,
    name: 'Premium Whey Protein',
    description: 'High-quality whey isolate with 24g protein per serving. Supports muscle recovery and growth.',
    price: 1999,
    category: 'Protein',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    bestSeller: true
  },
  {
    id: 2,
    name: 'Ultra Pre-Workout',
    description: 'Advanced formula with caffeine, beta-alanine, and citrulline for energy and pumps.',
    price: 1599,
    category: 'Pre-Workout',
    image: 'https://images.unsplash.com/photo-1546868871-0f936769675e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    bestSeller: false
  },
  {
    id: 3,
    name: 'Mass Gainer 5000',
    description: 'Calorie-dense formula with 1250 calories per serving to support weight gain goals.',
    price: 2499,
    category: 'Mass Gainers',
    image: 'https://images.unsplash.com/photo-1607611439230-fcbf50e42f4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    bestSeller: false
  },
  {
    id: 4,
    name: 'BCAA Recovery Mix',
    description: '2:1:1 ratio of BCAAs to support muscle recovery and reduce soreness during training.',
    price: 1299,
    category: 'BCAA & EAA',
    image: 'https://images.unsplash.com/photo-1579722820988-01a6259ae6c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    bestSeller: false
  },
  {
    id: 5,
    name: 'Fat Burner Extreme',
    description: 'Thermogenic formula with green tea extract and L-carnitine to support metabolism.',
    price: 1799,
    category: 'Weight Management',
    image: 'https://images.unsplash.com/photo-1512069093563-32e512fa87a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.3,
    bestSeller: true
  },
  {
    id: 6,
    name: 'Daily Multivitamin',
    description: 'Complete formula with essential vitamins and minerals to support overall health.',
    price: 999,
    category: 'Vitamins',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    bestSeller: false
  },
  {
    id: 7,
    name: 'Plant Protein',
    description: 'Vegan-friendly protein blend from pea, rice, and hemp sources with 20g protein per serving.',
    price: 2199,
    category: 'Protein',
    image: 'https://images.unsplash.com/photo-1622485482776-ce1504db923e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    bestSeller: false
  },
  {
    id: 8,
    name: 'Creatine Monohydrate',
    description: 'Pure creatine monohydrate to support strength, power and muscle recovery.',
    price: 1099,
    category: 'Pre-Workout',
    image: 'https://images.unsplash.com/photo-1610725664285-7c67e1dfead5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    bestSeller: true
  }
];

interface StoreProductsProps {
  addToCart: (product: any) => void;
}

const StoreProducts: React.FC<StoreProductsProps> = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-gym-red text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <Card key={product.id} className="premium-card">
            <div className="relative overflow-hidden h-56">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              {product.bestSeller && (
                <span className="absolute top-2 right-2 bg-gym-gold text-gym-black text-xs px-2 py-1 rounded-full font-bold">
                  BEST SELLER
                </span>
              )}
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle>{product.name}</CardTitle>
              <div className="flex items-center mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
              </div>
            </CardHeader>
            
            <CardContent>
              <CardDescription className="h-12 overflow-hidden">
                {product.description}
              </CardDescription>
              <p className="text-2xl font-bold text-gym-red mt-4">₹{product.price}</p>
            </CardContent>
            
            <CardFooter>
              <Button 
                className="w-full bg-gym-black hover:bg-opacity-80 text-white"
                onClick={() => addToCart(product)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StoreProducts;
