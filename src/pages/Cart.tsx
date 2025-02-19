import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { Trash2, Plus, Minus, LogIn } from 'lucide-react';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { items, removeItem, updateQuantity, total } = useCart();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gold-50">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl font-display font-bold text-gold-800 mb-4">
              Sign in to View Your Cart
            </h1>
            <p className="text-gold-600 text-lg mb-8">
              Please sign in to view and manage your cart items
            </p>
            <Button
              onClick={() => navigate('/signin')}
              className="bg-gradient-to-r from-gold-500 to-gold-700 hover:from-gold-600 hover:to-gold-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Sign In
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gold-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-display font-bold text-gold-800 mb-8">
            Your Cart
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gold-600 text-lg mb-6">Your cart is empty</p>
              <Button
                onClick={() => navigate('/rentals')}
                className="bg-gradient-to-r from-gold-500 to-gold-700 hover:from-gold-600 hover:to-gold-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Browse Rentals
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gold-100">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 border-b border-gold-100 last:border-0"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gold-800">
                        {item.name}
                      </h3>
                      <p className="text-gold-600">
                        ${item.price.toFixed(2)} per item
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        variant="outline"
                        size="sm"
                        className="border-gold-200 hover:border-gold-300 text-gold-600"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        variant="outline"
                        size="sm"
                        className="border-gold-200 hover:border-gold-300 text-gold-600"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="text-right min-w-[100px]">
                      <div className="font-semibold text-gold-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                    <Button
                      onClick={() => removeItem(item.id)}
                      variant="outline"
                      size="sm"
                      className="text-red-500 hover:text-red-700 border-red-200 hover:border-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-gold-100 pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-semibold text-gold-800">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-gold-800">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <Button
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-gold-600 hover:bg-gold-700 text-white font-semibold py-4 rounded-lg transition-colors"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;
