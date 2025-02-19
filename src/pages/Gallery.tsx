import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, Calendar, Heart } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  location: string;
  featured: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Elegant Wedding Reception",
    category: "Weddings",
    description: "A stunning setup featuring our premium table settings and floral arrangements",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
    date: "January 2025",
    location: "Crystal Ballroom",
    featured: true,
  },
  {
    id: 2,
    title: "Corporate Gala Dinner",
    category: "Corporate",
    description: "Sophisticated evening setup with modern furniture and ambient lighting",
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=800&q=80",
    date: "December 2024",
    location: "Grand Hotel",
    featured: true,
  },
  {
    id: 3,
    title: "Garden Party Setup",
    category: "Social",
    description: "Outdoor celebration with rustic decor and string lighting",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
    date: "March 2025",
    location: "Botanical Gardens",
    featured: false,
  },
  // Add more gallery items here
];

const categories = ["All", "Weddings", "Corporate", "Social", "Birthday", "Anniversary"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-white to-gold-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-8 flex items-center justify-center gap-2">
              <Camera className="h-8 w-8 text-primary-400" />
              Our Event Portfolio
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our collection of beautifully executed events. Each image represents 
              a unique story and showcases our commitment to creating unforgettable experiences.
            </p>
          </motion.div>

          {/* Filter Section */}
          <div className="mb-12 flex justify-center">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Featured Events Section */}
          {selectedCategory === "All" && (
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8">Featured Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredItems
                  .filter((item) => item.featured)
                  .map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="relative group cursor-pointer bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all dark:bg-gray-800/50"
                      onClick={() => setSelectedImage(item)}
                    >
                      <div className="relative h-[400px] rounded-xl overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-gray-200 mb-4">{item.description}</p>
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {item.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="h-4 w-4" />
                              Featured
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          )}

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems
                .filter((item) => !item.featured || selectedCategory !== "All")
                .map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative group cursor-pointer bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all dark:bg-gray-800/50"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="relative h-[300px] rounded-xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-200 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          {/* Image Modal */}
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl bg-gradient-to-br from-gold-50 to-white dark:from-gray-900 dark:to-gray-800">
              <DialogHeader>
                <DialogTitle>{selectedImage?.title}</DialogTitle>
              </DialogHeader>
              {selectedImage && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">About This Event</h3>
                      <p className="text-gray-600">{selectedImage.description}</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Date:</span>
                        <span className="text-gray-600">{selectedImage.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Location:</span>
                        <span className="text-gray-600">{selectedImage.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Category:</span>
                        <span className="text-gray-600">{selectedImage.category}</span>
                      </div>
                    </div>
                    <Button className="w-full" size="lg">
                      Book Similar Event
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
