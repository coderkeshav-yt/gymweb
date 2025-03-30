
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import StoreProducts from '@/components/StoreProducts';
import StoreCart from '@/components/StoreCart';
import { useToast } from '@/hooks/use-toast';

const Store = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const addToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(
        cartItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(
      cartItems.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1590239926044-4fc2b92bfc12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Supplement Store</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/80">
            Premium supplements to fuel your workouts and maximize your results
          </p>
          
          <div className="flex justify-center mt-8">
            <Button 
              className="relative mx-2 bg-gym-gold text-gym-black hover:bg-opacity-90"
              onClick={() => window.scrollTo({top: document.getElementById('products')?.offsetTop - 100, behavior: 'smooth'})}
            >
              Browse Products
            </Button>
            
            <Button 
              className="relative mx-2 border-2 border-white bg-transparent hover:bg-white/10 text-white"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              View Cart
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gym-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Button>
          </div>
        </div>
      </section>
      
      {/* Store Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Premium Supplements</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              High-quality supplements to support your fitness journey and optimize your results
            </p>
          </div>
          
          <StoreProducts addToCart={addToCart} />
        </div>
      </section>
      
      {/* Why Our Supplements Section */}
      <section className="py-20 premium-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">Why Choose Our Supplements</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              We select only the highest quality supplements backed by science and trusted by professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Premium Quality",
                description: "All our supplements are sourced from trusted manufacturers with strict quality control",
                icon: "🏆"
              },
              {
                title: "Science-Backed",
                description: "Formulations supported by scientific research for optimal effectiveness",
                icon: "🔬"
              },
              {
                title: "Trainer Approved",
                description: "Used and recommended by our own fitness professionals",
                icon: "👨‍🏫"
              },
              {
                title: "Satisfaction Guaranteed",
                description: "100% satisfaction guarantee on all products or your money back",
                icon: "✅"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Nutritional Consultation */}
      <section className="py-20 bg-gym-lightGray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border-l-4 border-gym-red">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img 
                src="https://randomuser.me/api/portraits/women/63.jpg" 
                alt="Nutrition Specialist" 
                className="w-32 h-32 rounded-full object-cover border-4 border-gym-red"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2">Need Nutritional Guidance?</h3>
                <p className="text-gray-600 mb-4">
                  Book a consultation with our in-house nutrition specialist Priya Sharma to create a 
                  personalized supplement plan aligned with your fitness goals.
                </p>
                <Button className="bg-gym-red hover:bg-opacity-90 text-white">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cart Sidebar */}
      <StoreCart 
        isOpen={isCartOpen} 
        setIsOpen={setIsCartOpen}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        cartTotal={cartTotal}
      />
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Store;
