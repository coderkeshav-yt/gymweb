
import React from 'react';
import { X, ShoppingCart, Trash, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface StoreCartProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  cartItems: CartItem[];
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  cartTotal: number;
}

const StoreCart: React.FC<StoreCartProps> = ({
  isOpen,
  setIsOpen,
  cartItems,
  removeFromCart,
  updateQuantity,
  cartTotal
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? 'visible' : 'invisible'}`}
      aria-labelledby="cart-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      
      {/* Cart Panel */}
      <div
        className={`fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-bold flex items-center" id="cart-title">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Your Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-700 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-4">Add some products to your cart to see them here</p>
                <Button 
                  onClick={() => setIsOpen(false)}
                  className="bg-gym-red hover:bg-opacity-90 text-white"
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <ul className="divide-y">
                {cartItems.map(item => (
                  <li key={item.id} className="py-4 flex">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-base font-medium">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gym-red hover:text-opacity-70"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">₹{item.price}</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-gray-100"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2 py-1">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-gray-100"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="font-medium">₹{item.price * item.quantity}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-4 bg-gray-50">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
                <p>Subtotal</p>
                <p>₹{cartTotal}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between text-lg font-bold mb-4">
                <p>Total</p>
                <p>₹{cartTotal}</p>
              </div>
              <Button className="w-full bg-gym-red hover:bg-opacity-90 text-white py-6">
                Proceed to Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreCart;
