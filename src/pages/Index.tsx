
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { navigation, PurchaseMode } from "@/lib/constants";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";
import { cn } from "@/lib/utils";

const featuredProducts = [
  {
    id: 1,
    name: "Event Tent",
    description: "Perfect for outdoor celebrations",
    price: "$299.99",
    rentalPrice: "$49.99/day",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Party Lights Set",
    description: "Create the perfect ambiance",
    price: "$89.99",
    rentalPrice: "$19.99/day",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Sound System",
    description: "Professional audio equipment",
    price: "$599.99",
    rentalPrice: "$99.99/day",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = [
  { name: "Tents & Structures", count: 12 },
  { name: "Furniture", count: 45 },
  { name: "Lighting", count: 23 },
  { name: "Sound Equipment", count: 18 },
  { name: "Decorations", count: 67 },
  { name: "Tableware", count: 34 },
];

export default function Index() {
  const [mode, setMode] = useState<PurchaseMode>("buy");

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="animate-fadeIn text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your Perfect Party Starts Here
            </h1>
            <p className="animate-fadeIn mt-6 text-lg leading-8 text-gray-600">
              Rent or buy premium party equipment for any occasion. From intimate gatherings to grand celebrations, we've got everything you need.
            </p>
            <div className="animate-fadeIn mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="group">
                Browse Equipment
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                How It Works
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Equipment
            </h2>
            <div className="flex items-center gap-4 bg-white rounded-lg p-1 shadow-sm">
              <Button
                variant="ghost"
                className={cn(
                  "transition-colors",
                  mode === "buy" && "bg-primary-100 text-primary-500"
                )}
                onClick={() => setMode("buy")}
              >
                Buy
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  "transition-colors",
                  mode === "rent" && "bg-primary-100 text-primary-500"
                )}
                onClick={() => setMode("rent")}
              >
                Rent
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transform transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{product.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {mode === "buy" ? product.price : product.rentalPrice}
                      </p>
                      <p className="text-xs text-gray-500">
                        {mode === "rent" && "Minimum 1 day rental"}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      {mode === "buy" ? "Add to Cart" : "Rent Now"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <a
                key={category.name}
                href="#"
                className="group flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-primary-100 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900 group-hover:text-primary-500">
                  {category.name}
                </span>
                <span className="mt-2 text-sm text-gray-500">
                  {category.count} items
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Browse & Select",
                description: "Choose from our wide range of party equipment",
              },
              {
                title: "Buy or Rent",
                description: "Select your preferred option and duration",
              },
              {
                title: "Enjoy Your Party",
                description: "We'll handle delivery and setup",
              },
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-500">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
              Julieluxevents
            </span>
            <p className="mt-4 text-gray-400 max-w-md">
              Making your celebrations extraordinary with premium party equipment rentals and sales.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>1234 Party Street</li>
              <li>Celebration City, PC 12345</li>
              <li>contact@julieluxevents.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
