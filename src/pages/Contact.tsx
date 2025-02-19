import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { Mail, Phone, MapPin, Instagram, Facebook, Clock, Calendar } from "lucide-react";
import AnimatedContactForm from "@/components/ContactForm";
import { LocationMap } from "@/components/LocationMap";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gold-50/30 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative isolate">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 opacity-50 mix-blend-multiply">
          <svg
            className="h-full w-full"
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.1">
              <circle cx="512" cy="512" r="450" stroke="currentColor" strokeWidth="2" />
              <circle cx="512" cy="512" r="400" stroke="currentColor" strokeWidth="2" />
              <circle cx="512" cy="512" r="350" stroke="currentColor" strokeWidth="2" />
            </g>
          </svg>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatedContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-xl p-6 space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                    <MapPin className="h-5 w-5 text-primary-600" />
                    <span>{siteConfig.contact.address}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                    <Phone className="h-5 w-5 text-primary-600" />
                    <span>{siteConfig.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                    <Mail className="h-5 w-5 text-primary-600" />
                    <span>{siteConfig.contact.email}</span>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                      <Clock className="h-5 w-5 text-primary-600" />
                      <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                      <Calendar className="h-5 w-5 text-primary-600" />
                      <span>Saturday: 10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href={`https://instagram.com/${siteConfig.contact.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href={`https://facebook.com/${siteConfig.contact.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-xl overflow-hidden">
                <LocationMap />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <main className="flex-1">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent dark:from-gold/10" />
          {/* RentalShowcase */}
          <div className="container mx-auto px-4 py-12">
          </div>
        </div>
      </main>
    </div>
  );
}
