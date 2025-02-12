
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star } from "lucide-react";

export default function Rentals() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
            <ShoppingBag className="h-8 w-8 text-primary-400" />
            Our Rentals
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Discover our extensive collection of premium event rentals, perfect for any occasion.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${1511795409834 + item}?auto=format&fit=crop&w=800&q=80`}
                  alt={`Rental item ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Rental Package {item}</h3>
                  <p className="text-gray-600 mb-4">Beautiful decorations for your special event</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-medium">$99/day</span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
