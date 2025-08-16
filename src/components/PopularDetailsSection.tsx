"use client";

import { useState, useEffect, memo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data remains the same ---
const products = [
  { id: 'prod1', title: 'Spherical Joint', specs: ['Material: Steel, Stainless Steel'], image: 'https://placehold.co/400x400/e2e8f0/4a5568.png?text=Joint' },
  { id: 'prod2', title: 'Mounting Plate', specs: ['Material: Steel, Aluminum'], image: 'https://placehold.co/400x400/cbd5e0/4a5568.png?text=Plate' },
  { id: 'prod3', title: 'Multi-Pin Enclosure', specs: ['Material: Plastic, Metal'], image: 'https://placehold.co/400x400/b2f5ea/4a5568.png?text=Enclosure' },
  { id: 'prod4', title: 'Protective Cap', specs: ['Material: Steel, Rubber'], image: 'https://placehold.co/400x400/fed7d7/4a5568.png?text=Cap' },
  { id: 'prod5', title: 'Adapter Flange', specs: ['Material: Aluminum 6061'], image: 'https://placehold.co/400x400/fefcbf/4a5568.png?text=Flange' }
];

const allSlides = [
    ...products,
    { id: 'drag-drop', type: 'dnd' as const }
];
const itemsPerPage = 3;
const numPages = Math.ceil(allSlides.length / itemsPerPage);


const PopularDetailsOverlapping = () => {
  const [page, setPage] = useState(0);

  // Automatically cycle between pages
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prevPage) => (prevPage + 1) % numPages);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Get the 3 items for the current page
  const currentItems = allSlides.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
  
  // Animation variants for the entire group of cards
  const groupVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center mt-1 mb-8">
  <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
    hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
    dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
    Manufacture
  </button>
</div>

        <div className="text-center mb-8">
          {/* Line 1 */}
          <p className="text-5xl font-bold">
            The Most Popular
          </p>

          {/* Line 2 */}
          <p className="text-5xl font-bold">
            <span className="italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-700 [text-shadow:1px_1px_2px_rgba(0,0,0,0.5)]">
              Details
            </span>{' '}
            We Produce
          </p>
        </div>

        
        {/* This container needs a fixed height and relative positioning to contain the overlapping cards */}
        <div className="mt-16 relative h-[450px]">
          <AnimatePresence>
            {/* We animate this single div. The key={page} is crucial! */}
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
                // These are now regular divs, not motion.divs
                <div key={item.id}>
                  {item.type === 'dnd' ? <DragDropCard /> : <ProductCard product={item as typeof products[0]} />}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// The ProductCard and DragDropCard components do not need any changes.
// --- (Paste the memoized ProductCard and DragDropCard components here) ---
const ProductCard = memo(function ProductCard({ product }: { product: any }) {
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


export default PopularDetailsOverlapping;