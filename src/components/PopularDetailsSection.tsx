"use client";

import { useState, useEffect, memo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Define a specific type for a product to fix the TypeScript error
type Product = {
  id: string;
  title: string;
  specs: string[];
  image: string;
};

const products: Product[] = [
  // FIXED: Added .png to URLs to prevent image errors
  { id: 'prod1', title: 'Spherical Joint', specs: ['Material: Steel, Stainless Steel', 'Load Capacity: Up to 10,000 N', 'Thread: M8 to M30', 'Bearing Type: Ball or Plain'], image: 'https://placehold.co/400x400/f0f4f8/4a5568.png?text=Joint' },
  { id: 'prod2', title: 'Mounting Plate', specs: ['Material: Steel, Aluminum', 'Hole Diameter: 6 mm to 12 mm', 'Vibration Damping: Rubber Inserts', 'Mounting Style: Horizontal, Vertical'], image: 'https://placehold.co/400x400/f0f4f8/4a5568.png?text=Plate' },
  { id: 'prod3', title: 'Multi-Pin Enclosure', specs: ['Material: Plastic, Metal', 'Pin Count: 2 to 50+ Pins', 'Waterproof Rating: IP65/IP67', 'Locking: Screw or Clip'], image: 'https://placehold.co/400x400/f0f4f8/4a5568.png?text=Enclosure' },
  { id: 'prod4', title: 'Protective Cap', specs: ['Material: Steel, Rubber'], image: 'https://placehold.co/400x400/f0f4f8/4a5568.png?text=Cap' },
  { id: 'prod5', title: 'Adapter Flange', specs: ['Material: Aluminum 6061'], image: 'https://placehold.co/400x400/f0f4f8/4a5568.png?text=Flange' }
];

const allSlides = [
    ...products,
    { id: 'drag-drop', type: 'dnd' as const }
];
const itemsPerPage = 3;
const numPages = Math.ceil(allSlides.length / itemsPerPage);

// Renamed component for consistency
const PopularDetailsSection = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prevPage) => (prevPage + 1) % numPages);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentItems = allSlides.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
  
  const groupVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    // The section background is transparent to show the global grid
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
            <button className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                • Manufacture
            </button>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900">
                The Most Popular
                <span className="block text-6xl md:text-8xl font-extrabold text-gray-400" style={{ fontFamily: 'serif', fontStyle: 'italic' }}>
                Details
                </span>
                We Produce
            </h1>
        </div>
        
        <div className="mt-20 relative h-[550px]">
          <AnimatePresence>
            <motion.div
              key={page}
              className="absolute top-0 left-0 w-full grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={groupVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {currentItems.map((item) => (
                <div key={item.id}>
                  {item.type === 'dnd' ? <DragDropCard /> : <ProductCard product={item as Product} />}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// Helper Components
const ProductCard = memo(function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white h-full p-6 rounded-lg border border-gray-200 flex flex-col relative">
      <a href="#" className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-gray-800">→</a>
      
      <div className="flex-grow">
        <h3 className="text-xl font-bold">{product.title}</h3>
        <ul className="mt-4 space-y-2 text-sm text-gray-500">
          {product.specs.map(spec => <li key={spec}>{spec}</li>)}
        </ul>
      </div>

      <div className="mt-8">
        <Image src={product.image} alt={product.title} width={400} height={400} className="rounded-md" />
      </div>
    </div>
  );
});

const DragDropCard = memo(function DragDropCard() {
  return (
    <div className="bg-blue-50 h-full border-2 border-dashed border-blue-200 rounded-lg flex flex-col justify-center items-center text-center p-8">
      <h3 className="text-2xl font-bold text-blue-900">Drag & Drop Your 3D Design</h3>
      <p className="mt-4 text-sm text-blue-700 font-mono tracking-widest">IGES / STL / FBX / DXF / STEP</p>
    </div>
  );
});

export default PopularDetailsSection;
