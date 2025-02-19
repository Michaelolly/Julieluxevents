export interface BackdropItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'arch' | 'backdrop' | 'stand' | 'decor';
  dimensions: string;
  colors?: string[];
  imageUrl?: string;
}

export const backdropsAndDecor: BackdropItem[] = [
  {
    id: 'arch-001',
    name: 'Gold Circular Arch Frame',
    description: 'Elegant gold circular arch frame, perfect for ceremonies and photo opportunities',
    price: 35.00,
    category: 'arch',
    dimensions: '6.6\' diameter'
  },
  {
    id: 'arch-002',
    name: 'Gold Circular Arch with Spandex Cover',
    description: 'Gold circular arch frame with spandex cover, available in black or white',
    price: 45.00,
    category: 'arch',
    dimensions: '6.6\' diameter',
    colors: ['black', 'white']
  },
  {
    id: 'arch-003',
    name: 'Gold 3-Piece Arch Frame',
    description: 'Versatile 3-piece gold arch frame set',
    price: 35.00,
    category: 'arch',
    dimensions: '6\'x2.6\', 5\'x2.2\', 4\'x1.7\''
  },
  {
    id: 'arch-004',
    name: 'Gold 3-Piece Arch Frame with Cover',
    description: 'Gold 3-piece arch frame set with cover, available in white, ivory, or black',
    price: 45.00,
    category: 'arch',
    dimensions: '6\'x2.6\', 5\'x2.2\', 4\'x1.7\'',
    colors: ['white', 'ivory', 'black']
  },
  {
    id: 'arch-005',
    name: 'Gold Arch Frame',
    description: 'Simple and elegant gold arch frame',
    price: 20.00,
    category: 'arch',
    dimensions: '6ft x 2.6ft'
  },
  {
    id: 'backdrop-001',
    name: 'Geometric Circular Backdrop',
    description: 'Modern geometric circular backdrop, flowers not included',
    price: 84.85,
    category: 'backdrop',
    dimensions: '7.2ft diameter'
  },
  {
    id: 'backdrop-002',
    name: 'Geometric Backdrop Set',
    description: 'Complete geometric backdrop set with three pieces',
    price: 159.90,
    category: 'backdrop',
    dimensions: '6.5\'x2\'x9.5", 5.5\'x3\'x9.5", 4.5\'x2\'x9.5"'
  },
  {
    id: 'backdrop-003',
    name: 'Rose Gold Sequin Backdrop with Stand',
    description: 'Glamorous rose gold sequin backdrop with stand included',
    price: 99.50,
    category: 'backdrop',
    dimensions: '8ft x 8ft'
  },
  {
    id: 'backdrop-004',
    name: 'Gold Sequin Backdrop with Stand',
    description: 'Classic gold sequin backdrop with stand included',
    price: 79.50,
    category: 'backdrop',
    dimensions: '8ft x 8ft'
  },
  {
    id: 'backdrop-005',
    name: 'Black Sequin Backdrop with Stand',
    description: 'Elegant black sequin backdrop with stand included',
    price: 79.50,
    category: 'backdrop',
    dimensions: '8ft x 8ft'
  },
  {
    id: 'backdrop-006',
    name: 'Silver Sequin Backdrop with Stand',
    description: 'Shimmering silver sequin backdrop with stand included',
    price: 79.50,
    category: 'backdrop',
    dimensions: '8ft x 8ft'
  },
  {
    id: 'backdrop-007',
    name: 'Floral Backdrop with Stand',
    description: 'Beautiful floral backdrop with stand included',
    price: 95.50,
    category: 'backdrop',
    dimensions: '6ft x 8ft'
  },
  {
    id: 'backdrop-008',
    name: 'Pipe & Drape Set',
    description: 'Professional pipe and drape set, available in white, ivory, or black. Client installation required',
    price: 99.90,
    category: 'backdrop',
    dimensions: '10\'-14\'H x 10\'W',
    colors: ['white', 'ivory', 'black']
  },
  {
    id: 'stand-001',
    name: 'Heavy Duty Backdrop Stand',
    description: 'Sturdy backdrop stand suitable for various backdrop types',
    price: 34.50,
    category: 'stand',
    dimensions: '10\'H x 10\'W'
  },
  {
    id: 'stand-002',
    name: 'Shiny Gold Backdrop Stand Set',
    description: 'Premium gold backdrop stand set',
    price: 179.99,
    category: 'stand',
    dimensions: 'Standard size'
  },
  {
    id: 'decor-001',
    name: '5-Arm Candelabra Acrylic Floor Candelabra',
    description: 'Elegant acrylic floor candelabra with 5 arms',
    price: 15.00,
    category: 'decor',
    dimensions: 'Standard size'
  },
  {
    id: 'decor-002',
    name: 'Drapery Rental',
    description: 'Elegant drapery available in white, ivory, or black',
    price: 7.50,
    category: 'decor',
    dimensions: 'Standard size',
    colors: ['white', 'ivory', 'black']
  },
  {
    id: 'decor-003',
    name: 'Sailboard Rental',
    description: '7\'H Sailboard for versatile decor arrangements',
    price: 25.00,
    category: 'decor',
    dimensions: '7\'H'
  }
];
