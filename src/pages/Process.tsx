
import Navbar from "@/components/Navbar";
import { Workflow } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Initial Consultation",
    description: "Schedule a meeting to discuss your vision and requirements."
  },
  {
    number: 2,
    title: "Design Proposal",
    description: "Receive a customized design proposal based on your preferences."
  },
  {
    number: 3,
    title: "Refinement",
    description: "Review and refine the design until it's perfect."
  },
  {
    number: 4,
    title: "Setup & Execution",
    description: "Our team handles all setup and styling on your event day."
  }
];

export default function Process() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
            <Workflow className="h-8 w-8 text-primary-400" />
            Our Process
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            We make event planning and styling simple and stress-free. Here's how we work with you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-primary-600 font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
