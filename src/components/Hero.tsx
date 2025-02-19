import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Sparkles, Star, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
      });
    }
    setTimeout(() => setIsLoaded(true), 1000);
  }, []);

  const socialLinks = [
    { icon: Mail, href: "mailto:juliesluxerentals@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+17052071718", label: "Call" },
    { icon: Instagram, href: "https://instagram.com/juliesluxeevents", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/JuliesLuxeEvents", label: "Facebook" }
  ];

  return (
    <section className="relative h-screen overflow-hidden bg-matte-black dark:bg-matte-black-dark">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-matte-black/80 via-emerald/30 to-gold/20 z-10" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover scale-105"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/placeholder.jpg"
          >
            <source src="/videos/background.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      {/* Animated Patterns */}
      <div className="absolute inset-0 z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-ivory/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="w-32 h-0.5 bg-gradient-to-r from-gold via-emerald to-gold mb-8"
        />

        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl font-bold mb-4 text-ivory"
        >
          Julie's Luxe
          <span className="block text-gold">Events & Rentals</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-xl md:text-2xl text-ivory/90 mb-12 max-w-2xl"
        >
          Transforming Events into Experiences
          <motion.span
            className="absolute -right-8 -top-6 text-gold"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-6 h-6" />
          </motion.span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 mb-12"
        >
          <Link to="/quote">
            <Button
              size="lg"
              className="bg-emerald hover:bg-emerald-light text-ivory px-8 py-6 text-lg rounded-none border-2 border-gold/20 
                hover:border-gold transition-all duration-300 shadow-lg hover:shadow-emerald/20"
            >
              Get a Quote
            </Button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-6"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gold hover:text-gold-light transition-colors duration-300"
            >
              <link.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Quick Quote Button */}
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ delay: 1.5 }}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-50"
        >
          <Link to="/quote">
            <Button
              className="bg-gold text-matte-black hover:bg-gold-light px-4 py-8 rounded-l-lg shadow-lg
                writing-mode-vertical transform rotate-180 font-serif"
              style={{ writingMode: 'vertical-rl' }}
            >
              Quick Quote
            </Button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-ivory/60 text-sm mb-2 font-sans">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-gold" />
        </motion.div>
      </div>
    </section>
  );
}