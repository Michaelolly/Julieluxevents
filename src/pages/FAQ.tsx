
import Navbar from "@/components/Navbar";
import { HelpCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive event styling and rental services, including decor design, setup, and breakdown for weddings, corporate events, and special occasions. Our services include floral arrangements, furniture rentals, lighting design, tableware, backdrops, and complete venue styling."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 6-8 months in advance for peak season events (May-October) and 3-4 months for off-season events. For popular dates like holidays and weekends, earlier booking is advised. However, we do accommodate last-minute bookings when possible."
  },
  {
    question: "Do you offer delivery and setup?",
    answer: "Yes, we provide professional delivery, setup, and breakdown services for all our rentals within the Greater Toronto Area. Our experienced team will handle everything from transportation to installation, ensuring your event space is perfectly styled. Additional fees may apply based on location and setup complexity."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing varies based on the items rented and services required. We offer both individual item rentals and complete styling packages. Basic decor packages start at $1,500, while comprehensive wedding packages typically range from $3,000 to $15,000+. We're happy to provide detailed quotes based on your specific needs."
  },
  {
    question: "Do you have a minimum rental requirement?",
    answer: "Yes, we have a minimum rental requirement of $500 for peak season events and $300 for off-season events. This helps us ensure we can provide the highest quality service and attention to detail for each event we take on."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require a 50% deposit to secure your date. Cancellations made 90+ days before the event receive a full deposit refund. Cancellations 60-89 days prior receive a 50% deposit refund. Cancellations less than 60 days before the event are non-refundable. We recommend event insurance for added protection."
  },
  {
    question: "Do you offer event design consultations?",
    answer: "Yes! We offer complimentary initial consultations to discuss your vision and needs. During this session, we'll explore themes, color schemes, and styling options. Detailed design services are available as part of our comprehensive packages or as a separate service."
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve the Greater Toronto Area, including Mississauga, Oakville, Burlington, Richmond Hill, and Vaughan. We can accommodate events outside these areas for an additional travel fee. Please contact us for specific location inquiries."
  }
];

export default function FAQ() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-8 flex items-center justify-center gap-2">
              <HelpCircle className="h-8 w-8 text-primary-400" />
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services, rentals, and processes. 
              Can't find what you're looking for? Feel free to contact us directly.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full mb-16">
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

          <div className="bg-primary-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help! Reach out to us directly and we'll be happy to assist you 
              with any questions or concerns.
            </p>
            <Button size="lg" className="gap-2">
              <Mail className="h-4 w-4" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
