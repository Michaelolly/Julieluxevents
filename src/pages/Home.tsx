import Navbar from "@/components/Navbar";
import { Features } from "@/components/Features";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { eventTypes, rentalCategories, whyChooseUs, faqs } from "@/lib/constants";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import AnimatedContactForm from "@/components/ContactForm";
import { contactInfo, footerLinks, siteConfig } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Browse Our Selection",
      description: "Browse our selection of event and wedding rentals.",
    },
    {
      number: "2",
      title: "Book Online",
      description: "Click the heart button next to any items you want on our rentals page.",
    },
    {
      number: "3",
      title: "Relax & Enjoy",
      description: "Breathe a sigh of relief, your quote is on its way.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
            {step.number}
          </div>
          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Categories Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Our Rental Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse through our extensive collection of high-quality event equipment and supplies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 z-20">
                    <category.icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600 line-clamp-2 mb-4">{category.description}</p>
                  </motion.div>

                  <div className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      <span>Premium Quality</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      <span>Professional Setup</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      <span>24/7 Support</span>
                    </motion.div>
                  </div>

                  <Link 
                    to={`/rentals/${category.id}`}
                    className="block"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                      className="mt-6"
                    >
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="w-full group-hover:bg-primary-500 group-hover:text-white transition-all duration-300"
                      >
                        View {category.name}
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link to="/rentals">
              <Button 
                size="lg"
                className="bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300"
              >
                View All Categories
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Areas Section */}
      <ServiceAreas />

      {/* Event Types Section */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold">Event Types We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we have the perfect equipment for every occasion.
            </p>
          </motion.div>
          <div className="flex flex-col space-y-24">
            {eventTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto"
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-w-16 aspect-h-9">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="object-cover w-full h-[400px] transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} space-y-6`}>
                  <h3 className="text-3xl font-bold">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Perfect for {type.title.toLowerCase()} events of any size. We provide all the essential equipment
                    and supplies to make your {type.title.toLowerCase()} event truly memorable.
                  </p>
                  <Button variant="outline" size="lg" className="mt-4">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Create Your Dream Event Today
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We invite you to browse our selection of event rental products. Peruse through a wide range of tents, tables, chairs, stage and decor for all your party rental needs. Whether you're looking for wedding tent rentals, corporate rentals, table rentals, or just birthday party rentals, we have the knowledge, equipment, and inventory to make your special event come to life!
            </p>
            <Link to="/rentals">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                How to request a quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-950" id="faq">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-primary-500 font-semibold tracking-[0.2em] uppercase text-sm mb-3 block font-faq-body">
              Got Questions?
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-faq-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-faq-body leading-relaxed">
              Find answers to common questions about our rental services and processes
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger 
                      className="hover:no-underline bg-gray-800/50 hover:bg-gray-800 px-8 py-6 rounded-2xl
                      text-white font-bold text-left font-faq-heading text-2xl
                      data-[state=open]:rounded-b-none data-[state=open]:bg-gray-800 transition-all duration-200"
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent 
                      className="bg-gray-800 px-8 py-6 text-gray-300 rounded-b-2xl font-faq-body
                      data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up
                      leading-relaxed text-lg"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="font-normal whitespace-pre-line"
                      >
                        {faq.answer}
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <p className="text-gray-400 mb-8 font-faq-body text-xl">
              Still have questions? We're here to help!
            </p>
            <Button
              asChild
              className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-6 rounded-xl
                transform transition-all duration-300 hover:scale-105 font-faq-body text-lg font-semibold"
            >
              <Link to="#contact">
                Contact Support
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100" id="contact">
        <div className="container mx-auto px-4 py-24">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold">Let's Talk About Your Event</h2>
                <p className="text-lg text-gray-600">
                  Planning an event? Let us help make it unforgettable! Whether you're hosting a wedding, 
                  special event, corporate event, or private celebration, we offer a wide range of premium 
                  party rentals and personalized services to suit your vision.
                </p>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">{contactInfo.email}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <AnimatedContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-primary-600 to-primary-400 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Stay Updated with Our Latest Offers
              </h2>
              <p className="text-xl text-white/90">
                Subscribe to our newsletter and be the first to know about special discounts, new equipment, and event planning tips.
              </p>
              <div className="flex flex-col space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white/90">Weekly updates on new equipment and offers</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white/90">Exclusive deals for subscribers only</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <motion.form 
                onSubmit={(e) => e.preventDefault()}
                className="space-y-4"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-lg text-gray-900 bg-white/90 backdrop-blur-sm border-2 border-transparent
                    focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200
                    text-lg"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-white/90
                    transform hover:scale-105 transition-all duration-200 text-lg"
                >
                  Subscribe Now
                </Button>
              </motion.form>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 text-lg text-white/80"
              >
                Join 5,000+ event planners who already subscribe to our newsletter.
                <br />
                We respect your privacy - unsubscribe at any time.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Julieluxevents</h3>
              <p className="text-gray-400 mb-6">
                Your premier destination for event rentals and party supplies.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  {/* Add social media icons here */}
                </a>
              </div>
            </div>

            {/* Quick Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-gray-400">
                <li>Phone: {contactInfo.phone}</li>
                <li>Email: {contactInfo.email}</li>
                <li>Address: {contactInfo.address}</li>
                <li>Hours: {contactInfo.hours}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Julieluxevents. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
