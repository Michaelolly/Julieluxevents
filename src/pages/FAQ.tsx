
import Navbar from "@/components/Navbar";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive event styling and rental services, including decor design, setup, and breakdown for weddings, corporate events, and special occasions."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 6-8 months in advance for peak season events (May-October) and 3-4 months for off-season events."
  },
  {
    question: "Do you offer delivery and setup?",
    answer: "Yes, we provide professional delivery, setup, and breakdown services for all our rentals within the Greater Toronto Area."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing varies based on the items rented and services required. We offer both individual item rentals and complete styling packages."
  },
  {
    question: "Do you have a minimum rental requirement?",
    answer: "Yes, we have a minimum rental requirement of $500 for peak season events and $300 for off-season events."
  }
];

export default function FAQ() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
            <HelpCircle className="h-8 w-8 text-primary-400" />
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Find answers to common questions about our services, rentals, and processes.
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
