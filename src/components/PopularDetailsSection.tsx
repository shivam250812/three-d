// "use client";

// import { useState, useEffect, memo } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';

// // Define a specific type for a product
// type Product = {
//   id: string;
//   title: string;
//   specs: string[];
//   image: string;
// };

// // Define a type for the drag-and-drop card
// type DragDrop = {
//   id: string;
//   type: 'dnd';
// };

// // Create a union type that can be either a Product or a DragDrop card
// type SlideItem = Product | DragDrop;

// const products: Product[] = [
//   { id: 'prod1', title: 'Spherical Joint', specs: ['Material: Steel, Stainless Steel'], image: 'https://placehold.co/400x400/e2e8f0/4a5568.png?text=Joint' },
//   { id: 'prod2', title: 'Mounting Plate', specs: ['Material: Steel, Aluminum'], image: 'https://placehold.co/400x400/cbd5e0/4a5568.png?text=Plate' },
//   { id: 'prod3', title: 'Multi-Pin Enclosure', specs: ['Material: Plastic, Metal'], image: 'https://placehold.co/400x400/b2f5ea/4a5568.png?text=Enclosure' },
//   { id: 'prod4', title: 'Protective Cap', specs: ['Material: Steel, Rubber'], image: 'https://placehold.co/400x400/fed7d7/4a5568.png?text=Cap' },
//   { id: 'prod5', title: 'Adapter Flange', specs: ['Material: Aluminum 6061'], image: 'https://placehold.co/400x400/fefcbf/4a5568.png?text=Flange' }
// ];

// const PopularDetailsSection = () => {
//   const [page, setPage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPage((prevPage) => (prevPage === 0 ? 1 : 0));
//     }, 4000); 

//     return () => clearInterval(interval);
//   }, []);

//   const variants = {
//     enter: { opacity: 0, y: 40 },
//     center: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -40 },
//   };

//   const pageOneItems: SlideItem[] = products.slice(0, 3);
//   const pageTwoItems: SlideItem[] = [
//     ...products.slice(3, 5),
//     { id: 'drag-drop', type: 'dnd' }
//   ];

//   const itemsToShow = page === 0 ? pageOneItems : pageTwoItems;

//   return (
//     <section className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-center text-4xl font-bold tracking-tighter">
//           The Most Popular <span className="text-5xl font-extrabold">Details</span> We Produce
//         </h2>
        
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 h-[450px]">
//           <AnimatePresence>
//             {itemsToShow.map((item) => (
//               <motion.div
//                 key={item.id}
//                 variants={variants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
//               >
//                 {/* FIXED: This robust check satisfies TypeScript and prevents build errors. */}
//                 {'type' in item && item.type === 'dnd' ? <DragDropCard /> : <ProductCard product={item as Product} />}
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };

// const ProductCard = memo(function ProductCard({ product }: { product: Product }) {
//   return (
//     <div className="bg-white h-full p-4 rounded-lg border border-gray-200 flex flex-col justify-between">
//       <div>
//         <div className="bg-gray-100 rounded-md">
//           <Image src={product.image} alt={product.title} width={400} height={400} className="rounded-md" />
//         </div>
//         <h3 className="font-bold text-lg mt-4">{product.title}</h3>
//         <ul className="mt-2 space-y-1 text-xs text-gray-500">
//           {product.specs.map(spec => <li key={spec}>{spec}</li>)}
//         </ul>
//       </div>
//       <button className="mt-4 text-left w-full text-blue-600 font-semibold">→</button>
//     </div>
//   );
// });

// const DragDropCard = memo(function DragDropCard() {
//   return (
//     <div className="bg-blue-50 h-full border-2 border-dashed border-blue-200 rounded-lg flex flex-col justify-center items-center text-center p-8">
//       <h3 className="text-2xl font-bold text-blue-900">Drag & Drop Your 3D Design</h3>
//       <p className="mt-4 text-sm text-blue-700 font-mono tracking-widest">IGES / STL / FBX / DXF / STEP</p>
//     </div>
//   );
// });

// export default PopularDetailsSection;
"use client";

import { useState } from 'react';
import Image from 'next/image';

// Type definitions
interface Feature {
  name: string;
  image: string;
  icon: string;
}

interface ProfileProps {
  name: string;
  title: string;
  initials: string;
}

// Features data with proper typing
const features: Feature[] = [
  { 
    name: 'Custom Brackets', 
    image: 'https://placehold.co/600x400/e2e8f0/4a5568.png?text=CNC+Bracket', 
    icon: '🔧' 
  },
  { 
    name: 'Steel Adapters', 
    image: 'https://placehold.co/600x400/cbd5e0/4a5568.png?text=Steel+Adapter', 
    icon: '⚙️' 
  },
  { 
    name: 'Motor Mounts', 
    image: 'https://placehold.co/600x400/b2f5ea/4a5568.png?text=Motor+Mount', 
    icon: '🔩' 
  },
  { 
    name: 'Enclosures', 
    image: 'https://placehold.co/600x400/fed7d7/4a5568.png?text=Metal+Enclosure', 
    icon: '📦' 
  },
];

// Profile component with proper typing
const ProfileSection: React.FC<ProfileProps> = ({ name, title, initials }) => (
  <div className="flex items-start gap-3">
    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
      {initials}
    </div>
    <div>
      <p className="font-bold text-base text-black">{name}</p>
      <p className="text-xs text-gray-500">{title}</p>
    </div>
  </div>
);

// Feature list item component
interface FeatureItemProps {
  feature: Feature;
  index: number;
  isActive: boolean;
  onHover: () => void;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature, index, isActive, onHover }) => (
  <div
    onMouseEnter={onHover}
    className="cursor-pointer group border-b border-gray-200 last:border-b-0"
  >
    <div className="py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-gray-400 text-sm font-mono w-6">
          {String(index + 1).padStart(2, '0')}.
        </span>
        <span className={`text-lg font-medium transition-colors ${
          isActive ? 'text-blue-600' : 'text-black'
        }`}>
          {feature.name}
        </span>
      </div>
      <span className="text-lg">{feature.icon}</span>
    </div>
  </div>
);

// Main component
const RevolutionizingSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<Feature>(features[0]);

  const handleFeatureHover = (feature: Feature): void => {
    setActiveFeature(feature);
  };

  return (
    <section className="h-screen px-4 sm:px-6 lg:px-8 bg-white py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 w-full h-full">
        {/* Left Column */}
        <div className="flex flex-col h-full">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded text-sm font-medium w-fit mb-4">
              About
              <span className="text-xs">↗</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black mb-8">
              Revolutionizing<br />
              Manufacturing with<br />
              Speed and{" "}
              <span
                className="italic font-light"
                style={{
                  background: 'linear-gradient(135deg, #9ca3af 0%, #d1d5db 25%, #f3f4f6 50%, #d1d5db 75%, #9ca3af 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontFamily: 'Georgia, serif'
                }}
              >
                Precision
              </span>
            </h1>
          </div>

          {/* Features List */}
          <div className="space-y-0 mb-8">
            {features.map((feature: Feature, index: number) => (
              <FeatureItem
                key={feature.name}
                feature={feature}
                index={index}
                isActive={activeFeature.name === feature.name}
                onHover={() => handleFeatureHover(feature)}
              />
            ))}
          </div>

          {/* Dynamic Feature Image - on left side */}
          <div className="mt-auto rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 via-purple-50 to-blue-50 aspect-video flex items-center justify-center">
            <Image 
              src={activeFeature.image} 
              alt={activeFeature.name}
              width={600}
              height={400}
              className="w-full h-full object-cover transition-all duration-300 ease-in-out"
            />
          </div>
        </div>

        {/* Right Column - Aligned with left content */}
        <div className="flex flex-col h-full">
          <div className="bg-gray-50 p-6 rounded-lg space-y-4 flex-1 flex flex-col">
            {/* Profile Section */}
            <ProfileSection 
              name="Ayrton Senna"
              title="CEO & Senior Partner at Forge"
              initials="AS"
            />

            {/* Content */}
            <div className="text-black space-y-4 text-sm leading-relaxed font-normal flex-1">
              <p>
                At Forge, we believe that getting custom CNC parts should be fast, reliable, and effortless. That&apos;s why we built a fully streamlined platform that turns your CAD files into production-ready parts—delivered in as fast as one day.
              </p>
              <p>
                We operate high-performance CNC machines backed by in-house automation and a trusted network of suppliers. From one-off prototypes to small production runs, our system is built to deliver precise, high-quality parts with speed.
              </p>
              <p>
                You can also reserve your own dedicated CNC machine through our RM (Reserved Machines) offering—your own production line, without the overhead.
              </p>
            </div>

            {/* Bottom tagline */}
            <div className="pt-4 mt-auto">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium leading-tight">
                EVERY DETAIL MATTERS — WE CRAFT<br />
                EACH PART WITH CARE, ACCURACY, AND<br />
                A FINISH THAT FEELS JUST RIGHT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionizingSection;
