import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { ShoppingCart, LogIn } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export interface RentalItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const RentalItem: React.FC<RentalItemProps> = ({
  id,
  name,
  description,
  price,
  image,
  category,
}) => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast({
        title: "Sign in required",
        description: "Please sign in to add items to your cart.",
        duration: 3000,
      });
      return;
    }

    addItem({
      id,
      name,
      price,
      quantity: 1,
      image,
    });

    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
      duration: 2000,
    });
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gold-100 hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-gold-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="p-4 space-y-2">
        <div className="mb-2">
          <span className="text-xs font-medium text-gold-600 uppercase tracking-wider">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-gold-600 font-semibold">${price.toFixed(2)}</p>
        
        {isAuthenticated ? (
          <Button
            onClick={handleAddToCart}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        ) : (
          <Button
            onClick={handleSignIn}
            className="w-full bg-gold-600 hover:bg-gold-700 text-white transition-colors flex items-center justify-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            Sign in to Add
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default RentalItem;
