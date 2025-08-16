"use client";

import { useState, useEffect, memo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Define a specific type for a product
type Product = {
  id: string;
  title: string;
  specs: string[];
  image: string;
};

const products: Product[] = [
  { id: 'prod1', title: 'Spherical Joint', specs: ['Material: Steel, Stainless Steel'], image: 'https://placehold.co/400x400/e2e8f0/4a5568.png?text=Joint' },
  { id: 'prod2', title: 'Mounting Plate', specs: ['Material: Steel, Aluminum'], image: 'https://placehold.co/400x400/cbd5e0/4a5568.png?text=Plate' },
  { id: 'prod3', title: 'Multi-Pin Enclosure', specs: ['Material: Plastic, Metal'], image: 'https://placehold.co/400x400/b2f5ea/4a5568.png?text=Enclosure' },
  { id: 'prod4', title: 'Protective Cap', specs: ['Material: Steel, Rubber'], image: 'https://placehold.co/400x400/fed7d7/4a5568.png?text=Cap' },
  { id: 'prod5', title: 'Adapter Flange', specs: ['Material: Aluminum 6061'], image: 'https://placehold.co/400x400/fefcbf/4a5568.png?text=Flange' }
];

const PopularDetailsSection = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prevPage) => (prevPage === 0 ? 1 : 0));
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: { opacity: 0, y: 40 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  };

  const pageOneItems = products.slice(0, 3);
  const pageTwoItems = [
    ...products.slice(3, 5),
    { id: 'drag-drop', type: 'dnd' }
  ];

  const itemsToShow = page === 0 ? pageOneItems : pageTwoItems;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold tracking-tighter">
          The Most Popular <span className="text-5xl font-extrabold">Details</span> We Produce
        </h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 h-[450px]">
          <AnimatePresence>
            {itemsToShow.map((item) => (
              <motion.div
                key={item.id}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              >
                {item.type === 'dnd' ? <DragDropCard /> : <ProductCard product={item as Product} />}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ProductCard = memo(function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white h-full p-4 rounded-lg border border-gray-200 flex flex-col justify-between">
      <div>
        <div className="bg-gray-100 rounded-md">
          <Image src={product.image} alt={product.title} width={400} height={400} className="rounded-md" />
        </div>
        <h3 className="font-bold text-lg mt-4">{product.title}</h3>
        <ul className="mt-2 space-y-1 text-xs text-gray-500">
          {product.specs.map(spec => <li key={spec}>{spec}</li>)}
        </ul>
      </div>
      <button className="mt-4 text-left w-full text-blue-600 font-semibold">→</button>
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
