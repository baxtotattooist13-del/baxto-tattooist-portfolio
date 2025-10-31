import { motion } from 'framer-motion';
import { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = ['todos', 'realismo', 'tradicional', 'minimalista', 'geométrico'];

  // Imágenes de ejemplo (usando placeholders)
  const tattoos = [
    { id: 1, category: 'realismo', image: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703f?w=500&h=500&fit=crop', title: 'Retrato Realista' },
    { id: 2, category: 'tradicional', image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500&h=500&fit=crop', title: 'Tradicional Americano' },
    { id: 3, category: 'minimalista', image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=500&h=500&fit=crop', title: 'Líneas Minimalistas' },
    { id: 4, category: 'geométrico', image: 'https://images.unsplash.com/photo-1590246814883-57c511a8c828?w=500&h=500&fit=crop', title: 'Diseño Geométrico' },
    { id: 5, category: 'realismo', image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=500&h=500&fit=crop', title: 'Animal Realista' },
    { id: 6, category: 'tradicional', image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500&h=500&fit=crop', title: 'Old School' },
    { id: 7, category: 'minimalista', image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=500&h=500&fit=crop', title: 'Símbolos Simples' },
    { id: 8, category: 'geométrico', image: 'https://images.unsplash.com/photo-1590246814883-57c511a8c828?w=500&h=500&fit=crop', title: 'Mandala' },
  ];

  const filteredTattoos = selectedCategory === 'todos'
    ? tattoos
    : tattoos.filter(tattoo => tattoo.category === selectedCategory);

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Galería de Trabajos
        </motion.h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredTattoos.map((tattoo, index) => (
            <motion.div
              key={tattoo.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="tattoo-card group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={tattoo.image}
                  alt={tattoo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{tattoo.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
