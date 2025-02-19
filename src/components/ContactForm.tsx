import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { Card } from "./ui/card";

export default function AnimatedContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-lg shadow-xl rounded-xl max-w-md w-full mx-auto">
      <motion.form
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <Input
            id="name"
            type="text"
            required
            className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary-400"
            placeholder="Your name"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            id="email"
            type="email"
            required
            className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary-400"
            placeholder="your@email.com"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone
          </label>
          <Input
            id="phone"
            type="tel"
            className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary-400"
            placeholder="Your phone number (optional)"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Message
          </label>
          <Textarea
            id="message"
            required
            className="w-full min-h-[120px] transition-all duration-200 focus:ring-2 focus:ring-primary-400"
            placeholder="Tell us about your event..."
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary-600 to-primary-400 text-white py-3 rounded-lg font-medium
              hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              "Send Message"
            )}
          </Button>
        </motion.div>
      </motion.form>
    </Card>
  );
}
