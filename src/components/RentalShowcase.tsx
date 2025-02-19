import { motion } from 'framer-motion';

const rentalItems = [
  {
    id: 1,
    name: 'Gold Wedding Arch Stand',
    description: 'Elegant gold-finished arch stand with floral arrangements',
    image: '/src/assets/images/rentals/gold-arch.jpg'
  },
  {
    id: 2,
    name: 'White Acrylic Stands',
    description: 'Modern acrylic flower stands for elegant displays',
    image: '/src/assets/images/rentals/acrylic-stands.jpg'
  },
  {
    id: 3,
    name: 'White Display Pedestals',
    description: 'Versatile white pedestals for cake displays and decor',
    image: '/src/assets/images/rentals/white-pedestals.jpg'
  },
  {
    id: 4,
    name: 'Rose Gold Cylinders',
    description: 'Metallic rose gold cylinders in various sizes',
    image: '/src/assets/images/rentals/rose-gold-cylinders.jpg'
  }
];

export function RentalShowcase() {
  return (
    <section className="py-12 bg-ivory/50 dark:bg-matteBlack/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-8 text-gray-900 dark:text-white">
          Featured Rental Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rentalItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800/50 rounded-2xl p-4 shadow-lg backdrop-blur-sm"
            >
              <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif text-gray-900 dark:text-white mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
