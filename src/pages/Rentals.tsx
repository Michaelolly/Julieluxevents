import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import RentalItem, { RentalItemProps } from '@/components/RentalItem';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

// Sample rental items data
const rentalItems: RentalItemProps[] = [
  {
    id: '1',
    name: 'Welcome Sign (Hard Foam board)',
    description: 'Elegant welcome sign perfect for weddings and special events',
    price: 100,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    category: 'Signage',
  },
  {
    id: '2',
    name: 'Head Table Flower Set',
    description: 'Beautiful floral arrangement for the main table',
    price: 699,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    category: 'Flowers',
  },
  {
    id: '3',
    name: 'Gold Charger Plates',
    description: 'Elegant gold-rimmed charger plates for table settings',
    price: 5,
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329',
    category: 'Tableware',
  },
  {
    id: '4',
    name: 'Crystal Centerpiece',
    description: 'Stunning crystal centerpiece for elegant table settings',
    price: 75,
    image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3',
    category: 'Decor',
  },
  {
    id: '5',
    name: 'LED Dance Floor',
    description: 'Illuminated dance floor for an unforgettable party experience',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
    category: 'Lighting',
  },
  {
    id: '6',
    name: 'Chiavari Chairs',
    description: 'Classic gold chiavari chairs for elegant seating',
    price: 8,
    image: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded',
    category: 'Furniture',
  },
];

const categories = [...new Set(rentalItems.map(item => item.category))];

const Rentals: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return rentalItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gold-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl font-display font-bold text-gold-800 mb-4">
            Party Gear Rentals
          </h1>
          <p className="text-lg text-gold-600">
            Browse our collection of high-quality event rentals
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gold-400" />
              <Input
                type="text"
                placeholder="Search rentals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-gold-200 focus:border-gold-400 focus:ring-gold-400"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                onClick={() => setSelectedCategory(null)}
                className={`${
                  !selectedCategory
                    ? 'bg-gold-600 text-white'
                    : 'bg-white text-gold-600 border border-gold-200'
                }`}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? 'bg-gold-600 text-white'
                      : 'bg-white text-gold-600 border border-gold-200'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Rental Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item) => (
            <RentalItem key={item.id} {...item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gold-600 text-lg">
              No items found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rentals;
