
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star } from "lucide-react";

const rentalCategories = [
  {
    id: 1,
    name: "Wedding Backdrops",
    description: "Beautiful custom-designed backdrops for your special day",
    price: "$299/day",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Luxury Table Settings",
    description: "Complete table settings including charger plates, cutlery, and glassware",
    price: "$45/person",
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Floral Arrangements",
    description: "Premium silk flower arrangements and centerpieces",
    price: "$150/arrangement",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "LED Dance Floors",
    description: "Illuminated dance floors in various sizes and patterns",
    price: "$899/day",
    image: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Luxury Lounge Sets",
    description: "Modern and vintage furniture sets for elegant event spaces",
    price: "$499/set/day",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Lighting Packages",
    description: "Premium lighting solutions including chandeliers and uplighting",
    price: "$399/package",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Rentals() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-8 flex items-center justify-center gap-2">
              <ShoppingBag className="h-8 w-8 text-primary-400" />
              Our Rental Collection
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our extensive collection of premium event rentals, perfect for any occasion. 
              From intimate gatherings to grand celebrations, our carefully curated selection of 
              decor and furnishings will transform your venue into an unforgettable space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalCategories.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-medium text-lg">{item.price}</span>
                    <Button>
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Custom Rental Packages</h2>
            <p className="text-gray-600 mb-6">
              Can't find exactly what you're looking for? We offer custom rental packages 
              tailored to your specific event needs. Contact us to discuss your vision!
            </p>
            <Button size="lg" variant="default">
              Request Custom Package
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
