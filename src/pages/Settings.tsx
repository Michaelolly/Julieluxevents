import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, User, ShoppingBag, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Settings: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gold-50 via-white to-gold-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gold-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-gold-100 p-4 rounded-full">
                <User className="w-8 h-8 text-gold-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
                <p className="text-gray-500">{user?.email}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="flex items-center justify-center space-x-2 h-20"
                    onClick={() => navigate('/cart')}
                  >
                    <ShoppingBag className="w-6 h-6 text-gold-600" />
                    <span className="text-gray-700">View Cart</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center space-x-2 h-20"
                    onClick={() => navigate('/rentals')}
                  >
                    <Clock className="w-6 h-6 text-gold-600" />
                    <span className="text-gray-700">Browse Rentals</span>
                  </Button>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="destructive"
                  className="w-full flex items-center justify-center space-x-2"
                  onClick={handleSignOut}
                >
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;
