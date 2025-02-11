
export const navigation = [
  { name: "Home", href: "/" },
  { name: "Wedding Package", href: "/wedding-package" },
  { name: "Event Styling", href: "/event-styling" },
  { name: "Rental", href: "/rental" },
  { name: "Pricing", href: "/pricing" },
  { name: "Wedding Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
];

export type PurchaseMode = "buy" | "rent";

export const featuredProducts = [
  {
    id: 1,
    name: "Welcome Sign (Hard Foam board)",
    description: "Elegant welcome sign for your special day",
    price: "$100.00",
    rentalPrice: "$25.00/day",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Head Table Flower Set",
    description: "Beautiful floral arrangement for the main table",
    price: "$699.00",
    rentalPrice: "$150.00/day",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "White Rectangular Arch",
    description: "Stunning wedding arch for ceremonies",
    price: "$700.00",
    rentalPrice: "$200.00/day",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
  },
];

export const categories = [
  { 
    name: "Wedding Packages", 
    description: "All-inclusive decor packages for ceremony & reception",
    count: 5,
    href: "/wedding-package"
  },
  { 
    name: "Event Styling", 
    description: "Event styling & decor for baby showers, birthdays, bridal showers and more",
    count: 12,
    href: "/event-styling"
  },
  { 
    name: "Rentals", 
    description: "DIY your own wedding or rent for your clients with our large rental collections",
    count: 45,
    href: "/rental"
  },
];

export const testimonials = [
  {
    name: "Sarah & Michael",
    text: "Thank you for making our wedding day absolutely perfect! The decor was stunning and exactly what we envisioned. Your attention to detail and professionalism made everything stress-free.",
  },
  {
    name: "Emily & James",
    text: "We can't thank Julieluxevents enough for the incredible job they did with our wedding decorations. Everything was absolutely beautiful and exactly as we had hoped.",
  },
  {
    name: "Jessica & David",
    text: "Working with Julieluxevents was the best decision we made for our wedding. The team's creativity and dedication to bringing our vision to life was outstanding.",
  },
];
