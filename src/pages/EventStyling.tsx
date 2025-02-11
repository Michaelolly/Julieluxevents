
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, Star, Calendar, Phone, PartyPopper, Baby, Gift, Heart, Users } from "lucide-react";

const eventTypes = [
  {
    title: "Baby Shower",
    description: "Create magical moments for the mom-to-be",
    icon: Baby,
    features: ["Custom themed decorations", "Balloon arrangements", "Photo backdrop", "Gift table setup"],
  },
  {
    title: "Birthday Party",
    description: "Make every birthday unforgettable",
    icon: PartyPopper,
    features: ["Age-appropriate themes", "Custom banners", "Party favors display", "Dessert table styling"],
  },
  {
    title: "Bridal Shower",
    description: "Elegant celebrations for the bride-to-be",
    icon: Heart,
    features: ["Romantic settings", "Floral arrangements", "Gift opening area", "Tea party setup"],
  },
  {
    title: "Corporate Events",
    description: "Professional styling for business gatherings",
    icon: Users,
    features: ["Brand integration", "Professional backdrops", "Awards ceremony setup", "Network area styling"],
  },
];

const packages = [
  {
    name: "Essential Package",
    price: "$499",
    features: [
      "Event consultation",
      "Theme development",
      "Basic decor setup",
      "2 hours styling time",
      "Setup and teardown",
    ],
  },
  {
    name: "Premium Package",
    price: "$899",
    features: [
      "Everything in Essential",
      "Custom backdrop",
      "Floral arrangements",
      "4 hours styling time",
      "Photo area setup",
      "Premium props",
    ],
  },
  {
    name: "Luxury Package",
    price: "$1499",
    features: [
      "Everything in Premium",
      "Full venue styling",
      "Custom installations",
      "Unlimited styling time",
      "Emergency kit",
      "Day-of coordinator",
      "VIP support",
    ],
  },
];

export default function EventStyling() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Palette className="h-8 w-8 text-primary-400" />
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">Event Styling</h1>
            </div>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your special moments into extraordinary experiences with our professional event styling services.
              From intimate gatherings to grand celebrations, we bring your vision to life.
            </p>
          </div>
        </div>
      </div>

      {/* Event Types */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Event Styling Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((event) => (
              <Card key={event.title} className="relative group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <event.icon className="h-6 w-6 text-primary-400" />
                    <CardTitle>{event.title}</CardTitle>
                  </div>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {event.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-primary-400" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Styling Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.name} className="relative group hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary-400">
                    {pkg.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-primary-400" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">Book Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Style Your Event?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your vision and let us create an unforgettable experience for your special occasion.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Calendar className="h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Phone className="h-5 w-5" />
              Call Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
