
import Navbar from "@/components/Navbar";
import { Workflow, Calendar, Palette, Sparkles, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    title: "Initial Consultation",
    description: "Schedule a meeting with our expert event stylists to discuss your vision, requirements, and budget. We'll help you explore different themes and possibilities for your event.",
    icon: Calendar,
    color: "text-blue-500"
  },
  {
    number: 2,
    title: "Design Proposal",
    description: "Based on our consultation, we'll create a detailed design proposal including mood boards, floor plans, and a comprehensive list of recommended items and styling elements.",
    icon: Palette,
    color: "text-purple-500"
  },
  {
    number: 3,
    title: "Refinement",
    description: "We'll work closely with you to refine every detail of the design until it perfectly matches your vision. This includes selecting specific items, colors, and arrangements.",
    icon: Sparkles,
    color: "text-pink-500"
  },
  {
    number: 4,
    title: "Setup & Execution",
    description: "On your event day, our professional team will handle all delivery, setup, and styling. After the event, we'll take care of the breakdown and collection of all items.",
    icon: Truck,
    color: "text-green-500"
  }
];

export default function Process() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-8 flex items-center justify-center gap-2">
              <Workflow className="h-8 w-8 text-primary-400" />
              Our Process
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've refined our process to make event planning and styling simple and stress-free. 
              Our experienced team will guide you through each step, ensuring every detail is 
              perfectly executed for your special day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step) => (
              <div key={step.number} className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className={`bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center mb-4 ${step.color}`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="absolute top-8 left-[68px] h-[2px] bg-primary-100 right-0 hidden lg:block" />
                <h3 className="text-xl font-semibold mb-2">
                  <span className="text-primary-400 mr-2">{step.number}.</span>
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Planning?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life! Schedule a consultation with our expert event stylists 
              to begin planning your perfect event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                Download Process Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
