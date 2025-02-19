import { Home, Box, Workflow, HelpCircle, Phone, LucideIcon, Tent, Table, Armchair, Music, UtensilsCrossed, Camera, Theater, Layout, Users, Calendar, Image, Instagram, Leaf, FileText, ShoppingBag, Calculator } from "lucide-react";

export const siteConfig = {
  name: "Julie's Luxe Events & Rentals",
  tagline: "Transforming Events into Experiences",
  description: "Premium event rentals and luxury event planning services in Sudbury",
  contact: {
    email: "juliesluxerentals@gmail.com",
    phone: "+1 705 207 1718",
    address: "252 Ester Street, Sudbury P3E 5C3",
    website: "www.afrocarribeanabroad.com",
    instagram: "@juliesluxeevents",
    facebook: "Julie's Luxe Events"
  },
  theme: {
    colors: {
      emerald: {
        DEFAULT: '#046B4E',
        light: '#0A8F69',
        dark: '#034E39'
      },
      gold: {
        DEFAULT: '#C6A355',
        light: '#D4B876',
        dark: '#B08F3C'
      },
      ivory: {
        DEFAULT: '#FFFFF0',
        light: '#FFFFF5',
        dark: '#F5F5DC'
      },
      matteBlack: {
        DEFAULT: '#28282B',
        light: '#383838',
        dark: '#1A1A1A'
      }
    }
  },
  services: [
    {
      name: "Wedding Rentals",
      description: "Elegant decor and furniture for your special day",
      items: ["Tables", "Chairs", "Linens", "Centerpieces", "Lighting"]
    },
    {
      name: "Corporate Events",
      description: "Professional event equipment for business functions",
      items: ["Audio/Visual", "Stage Setup", "Seating Arrangements", "Displays"]
    },
    {
      name: "Social Gatherings",
      description: "Everything you need for memorable celebrations",
      items: ["Party Furniture", "Decor Items", "Bar Equipment", "Dance Floors"]
    },
    {
      name: "Custom Packages",
      description: "Tailored solutions for unique events",
      items: ["Custom Decor", "Theme Setup", "Full Event Planning", "On-site Support"]
    }
  ],
  eventTypes: [
    "Weddings",
    "Corporate Events",
    "Birthday Parties",
    "Anniversaries",
    "Graduations",
    "Baby Showers",
    "Engagement Parties",
    "Holiday Celebrations",
    "Religious Ceremonies",
    "Outdoor Events"
  ]
};

export const navigation = [
  {
    name: "Home",
    href: "/",
    icon: Home
  },
  {
    name: "Rentals",
    href: "/rentals",
    icon: ShoppingBag
  },
  {
    name: "Process",
    href: "/process",
    icon: FileText
  },
  {
    name: "Gallery",
    href: "/gallery",
    icon: Image
  }
];

export const serviceAreas = {
  primary: {
    name: "Greater Sudbury, Ontario",
    description: "Our primary service area with full-service delivery and setup available",
  },
  surrounding: {
    name: "Surrounding Regions",
    areas: ["Chelmsford", "Hanmer", "Lively", "Val Caron", "Capreol"],
    description: "Delivery and setup available with standard delivery fees",
  },
  extended: {
    name: "Extended Service Areas",
    areas: ["Toronto", "Ottawa"],
    description: "Available for destination events upon request",
    notes: "Additional travel fees may apply"
  },
  options: {
    delivery: "Available within Sudbury and select surrounding regions",
    selfPickup: "Available for clients looking for budget-friendly rental solutions",
    destination: "Pop-Up & Destination Event Rentals available outside Sudbury"
  }
};

export const contactInfo = {
  phone: "+1 705 207 1718",
  email: "juliesluxerentals@gmail.com",
  address: "252 Ester Street, Sudbury P3E 5C3",
  hours: "Monday-Friday | 9:00AM - 5:00PM",
  serviceAreas: serviceAreas,
  social: {
    instagram: "@juliesluxeevents",
    facebook: "Julie's Luxe Events"
  }
};

export const features = [
  {
    id: "catalog",
    name: "Online Rental Catalog",
    description: "Browse rental inventory with clear pricing & descriptions",
    icon: Box,
    href: "/rentals"
  },
  {
    id: "availability",
    name: "Real-Time Availability",
    description: "Display current stock levels to assist clients in planning. Instantly reserve available items.",
    icon: Calendar,
    href: "/rentals"
  },
  {
    id: "client-portal",
    name: "Client Portal Access",
    description: "Log in to track bookings, invoices, and past orders",
    icon: Users,
    href: "/dashboard"
  },
  {
    id: "quote",
    name: "Instant Quote Request",
    description: "Select items and receive immediate pricing estimates",
    icon: Box,
    href: "/quote"
  },
  {
    id: "design-tool",
    name: "Virtual Event Design Tool",
    description: "Interactive layout planner for arranging tables, chairs, and décor",
    icon: Layout,
    href: "/design"
  },
  {
    id: "testimonials",
    name: "Client Testimonials",
    description: "Reviews and event photos from satisfied clients",
    icon: Users,
    href: "/testimonials"
  },
  {
    id: "social",
    name: "Social Media Integration",
    description: "Live Instagram/Facebook feeds showcasing styled events",
    icon: Instagram,
    href: "/gallery"
  },
  {
    id: "sustainability",
    name: "Sustainability Commitment",
    description: "Our eco-friendly rental items and business practices",
    icon: Leaf,
    href: "/sustainability"
  },
  {
    id: "gallery",
    name: "Event Styling Gallery",
    description: "Showcasing past events and rental setups",
    icon: Image,
    href: "/gallery"
  },
  {
    id: "booking",
    name: "Easy Booking Process",
    description: "Streamlined inquiry and reservation process",
    icon: Calendar,
    href: "/contact"
  }
];

export type PurchaseMode = "buy" | "rent";

export const rentalCategories = [
  {
    id: 1,
    name: "Tents & Canopies",
    icon: Tent,
    description: "High-quality tents and canopies for any outdoor event",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Tables & Linens",
    icon: Table,
    description: "Elegant tables and linens for your special occasion",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Chairs",
    icon: Armchair,
    description: "Comfortable and stylish seating options",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Wedding & Games + A/V",
    icon: Music,
    description: "Entertainment equipment and wedding essentials",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Catering & Concession",
    icon: UtensilsCrossed,
    description: "Professional catering equipment",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Photo Booths",
    icon: Camera,
    description: "Fun and memorable photo experiences",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Site Equipment & Staging",
    icon: Theater,
    description: "Professional staging and site equipment",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
  },
];

export const whyChooseUs = [
  {
    title: "Exceptional Customer Service",
    description: "Our dedicated team works closely with you to understand your needs, providing personalized service and support throughout the planning process to guarantee a seamless experience.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Wide Range of High-Quality Products",
    description: "We offer an extensive selection of premium event rentals, from furniture and decor to tents and lighting, ensuring your event looks and feels exactly as you envision.",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Reliable Delivery",
    description: "We pride ourselves on efficiency and communication, ensuring that everything arrives and is set up on time, allowing you to focus on enjoying your event without stress.",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=800&q=80",
  },
];

export const eventTypes = [
  {
    title: "Tent & Canopy Rentals",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Chair Rentals",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Wedding Rentals",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Trade Show Services",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Popular Party Rentals",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Staging Solutions",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
  },
];

export const footerLinks = [
  {
    title: "NAVIGATION",
    links: [
      { name: "Home", href: "/" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Our Rentals", href: "/rentals" },
      { name: "Resources", href: "/resources" },
      { name: "FAQ", href: "/faq" },
      { name: "Event Services", href: "/services" },
    ]
  },
  {
    title: "RENTAL SERVICES",
    links: [
      { name: "Stage Rentals", href: "/rentals/stage" },
      { name: "Stageline Rentals", href: "/rentals/stageline" },
      { name: "Tent Rentals", href: "/rentals/tent" },
      { name: "Trade Show Rentals", href: "/rentals/trade-show" },
      { name: "Stampede Rentals", href: "/rentals/stampede" },
      { name: "Wedding Rentals", href: "/rentals/wedding" },
      { name: "Event Financing", href: "/financing" },
      { name: "Photo Booth Rentals", href: "/rentals/photo-booth" },
      { name: "Chair Rentals", href: "/rentals/chair" },
    ]
  }
];

export const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We primarily serve Greater Sudbury and surrounding regions including Chelmsford, Hanmer, Lively, Val Caron, and Capreol. We also offer services for destination events in Toronto and Ottawa upon request. Both delivery/setup and self-pickup options are available."
  },
  {
    question: "How do I request a quote?",
    answer: "You can easily request a quote through our online catalog. Simply select the items you're interested in, and our system will generate an instant estimate. For custom packages or special requirements, please contact us directly."
  },
  {
    question: "Do you offer delivery and setup?",
    answer: "Yes, we offer professional delivery and setup services within Greater Sudbury and select surrounding regions. Self-pickup is also available for budget-conscious clients. For destination events, additional travel fees may apply."
  },
  {
    question: "How do I modify my rental order after signing?",
    answer: "Yes, with certain conditions:\n• Additions can be made up to 14 days before delivery/pickup, subject to availability\n• Last-minute additions (less than 48 hours) will be accommodated if possible\n• Reductions made 14+ days before delivery/pickup receive full credit\n• Reductions made less than 14 days before are non-refundable\n• No reduction can exceed the total retainer payment"
  },
  {
    question: "What types of events do you serve?",
    answer: "We cater to a wide variety of events including:\n• Friendly Gatherings\n• Church Events\n• Art Sales\n• Shindigs\n• And many more! Our equipment is versatile and can be adapted to any event type."
  },
  {
    question: "Do you provide delivery and setup services?",
    answer: "Yes! We offer professional delivery and setup services for all our rental equipment. Our team will ensure everything is properly installed and working before your event."
  },
  {
    question: "What happens if equipment malfunctions during my event?",
    answer: "We provide 24/7 emergency support for all rentals. If any equipment malfunctions, our technical team will respond promptly to resolve the issue or provide replacement equipment."
  },
  {
    question: "What is your liability policy?",
    answer: "Customers are responsible for any accidents or incidents causing property damage or bodily harm during the rental period. While we maintain our equipment to high standards, The Rental Brothers shall not be responsible for any loss or damage to customer's property connected with the use of our rental equipment. We recommend customers obtain appropriate event insurance."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Our cancellation policy aligns with our modification rules: full credit for cancellations made 14+ days before the event, no refunds for cancellations made less than 14 days before. The refund amount cannot exceed the retainer payment."
  },
  {
    question: "Do you offer insurance for rental equipment?",
    answer: "While we don't provide direct insurance, we strongly recommend customers obtain event insurance to cover potential damages or liability. We can recommend trusted insurance providers who specialize in event coverage."
  }
];
