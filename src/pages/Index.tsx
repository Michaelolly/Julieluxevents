
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import { navigation, categories, featuredProducts, testimonials, PurchaseMode } from "@/lib/constants";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Index() {
  const [mode, setMode] = useState<PurchaseMode>("rent");

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="animate-fadeIn text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Make your dream event come true
            </h1>
            <p className="animate-fadeIn mt-6 text-lg leading-8 text-gray-600">
              From subtly chic, to opulent and even theatrical, Julieluxevents is highly regarded for its expertise and impeccable service bringing client's fantasies to life in a spectacular and memorable style.
            </p>
            <div className="animate-fadeIn mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="group">
                Let's celebrate
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-8 text-center"
              >
                <h3 className="text-2xl font-semibold mb-4">{category.name}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <Button variant="outline" className="group-hover:bg-primary-100">
                  Learn More
                </Button>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">
            Rental Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all" />
                  <Button
                    variant="secondary"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Quick View
                  </Button>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{product.description}</p>
                  <div className="mt-4">
                    <p className="text-lg font-medium text-gray-900">
                      Price: {mode === "buy" ? product.price : product.rentalPrice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
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
              Making your celebrations extraordinary with premium event styling and rental services.
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
              <li>300 Event Street</li>
              <li>Toronto, ON M1M 1M1</li>
              <li>contact@julieluxevents.com</li>
              <li>(647) 123-4567</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
