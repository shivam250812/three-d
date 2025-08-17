// // "use client";

// // import { useState } from 'react';
// // import Image from 'next/image';

// // const features = [
// //   {
// //     name: 'Custom Brackets',
// //     // CHANGED: Added .png to the URL
// //     image: 'https://placehold.co/500x300/e2e8f0/4a5568.png?text=CNC+Bracket',
// //   },
// //   {
// //     name: 'Steel Adapters',
// //     // CHANGED: Added .png to the URL
// //     image: 'https://placehold.co/500x300/cbd5e0/4a5568.png?text=Steel+Adapter',
// //   },
// //   {
// //     name: 'Motor Mounts',
// //     // CHANGED: Added .png to the URL
// //     image: 'https://placehold.co/500x300/b2f5ea/4a5568.png?text=Motor+Mount',
// //   },
// //   {
// //     name: 'Enclosures',
// //     // CHANGED: Added .png to the URL
// //     image: 'https://placehold.co/500x300/fed7d7/4a5568.png?text=Metal+Enclosure',
// //   },
// // ];

// // const RevolutionizingSection = () => {
// //   const [activeFeature, setActiveFeature] = useState(features[0]);

// //   return (
// //     <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
// //         {/* Left Column */}
// //         <div className="space-y-8">
// //           <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
// //             About
// //           </div>
// //           <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter">
// //             Revolutionizing Manufacturing with Speed and{' '}
// //             <span className="font-extralight tracking-wider">
// //               Precision
// //             </span>
// //           </h2>

// //           <div className="space-y-4">
// //             {features.map((feature) => (
// //               <div
// //                 key={feature.name}
// //                 onMouseEnter={() => setActiveFeature(feature)}
// //                 className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
// //                   activeFeature.name === feature.name ? 'bg-blue-50' : ''
// //                 }`}
// //               >
// //                 <p className={`text-base font-semibold flex items-center gap-4 ${
// //                   activeFeature.name === feature.name ? 'text-blue-600' : 'text-gray-800'
// //                 }`}>
// //                    {activeFeature.name === feature.name && (
// //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
// //                    )}
// //                   {feature.name}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
          
// //           <div className="mt-8 relative w-full aspect-video">
// //              <Image
// //               src={activeFeature.image}
// //               alt={activeFeature.name}
// //               fill
// //               sizes="(max-width: 1024px) 100vw, 50vw"
// //               className="rounded-lg shadow-md object-cover"
// //             />
// //           </div>
// //         </div>

// //         {/* Right Column */}
// //         <div className="bg-gray-50 p-8 rounded-lg mt-4">
// //            <div className="flex items-start gap-4">
// //                {/* CHANGED: Added .png to the URL */}
// //                <Image src="https://placehold.co/60x60/a0aec0/ffffff.png?text=AS" alt="Ayrton Senna" width={60} height={60} className="rounded-full" />
// //                <div>
// //                    <p className="font-bold text-lg">Ayrton Senna</p>
// //                    <p className="text-sm text-gray-500">CEO & Series Partner at Forge</p>
// //                </div>
// //            </div>
// //            <div className="mt-6 text-gray-700/90 space-y-4 text-base leading-relaxed">
// //                <p>At Forge, we believe that getting custom CNC parts should be fast, reliable, and effortless. That's why we built a fully streamlined platform that turns your CAD files into production-grade parts—delivered in as fast as one day. Whether you're prototyping or scaling, we remove the friction from manufacturing so you can focus on building what matters.</p>
// //                <p>We operate high-performance CNC machines backed by in-house automation and a trusted network of suppliers. From one-off prototypes to small production runs, our system is built to deliver precise, high-quality parts with speed. You can also reserve your own dedicated machine—we'll machine your parts and have them ready for you—your own production line, without the overhead.</p>
// //            </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default RevolutionizingSection;


// "use client";

// import { useState } from 'react';
// import Image from 'next/image';
// import {easeOut, motion} from 'framer-motion'

// const features = [
//   { name: 'Custom Brackets', image: 'https://placehold.co/600x400/e2e8f0/4a5568.png?text=CNC+Bracket' },
//   { name: 'Steel Adapters', image: 'https://placehold.co/600x400/cbd5e0/4a5568.png?text=Steel+Adapter' },
//   { name: 'Motor Mounts', image: 'https://placehold.co/600x400/b2f5ea/4a5568.png?text=Motor+Mount' },
//   { name: 'Enclosures', image: 'https://placehold.co/600x400/fed7d7/4a5568.png?text=Metal+Enclosure' },
// ];

// const RevolutionizingSection = () => {
//   const [activeFeature, setActiveFeature] = useState(features[0]);

//   return (
//     <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
//         <div className="space-y-8">
//           <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
//             About
//           </div>
//           <motion.h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter" initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,ease:easeOut}} viewport={{once:false}}>
//             Revolutionizing Manufacturing with Speed and{' '}
//             <span className="font-extralight tracking-wider">
//               Precision
//             </span>
//           </motion.h2 >
//           <div className="space-y-4">
//             {features.map((feature) => (
//               <div key={feature.name} onMouseEnter={() => setActiveFeature(feature)} className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${activeFeature.name === feature.name ? 'bg-blue-50' : ''}`}>
//                 <p className={`text-base font-semibold flex items-center gap-4 ${activeFeature.name === feature.name ? 'text-blue-600' : 'text-gray-800'}`}>
//                    {activeFeature.name === feature.name && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>}
//                   {feature.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//           <div className="mt-8 relative w-full aspect-video">
//              <Image src={activeFeature.image} alt={activeFeature.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="rounded-lg shadow-md object-cover" />
//           </div>
//         </div>
//         <div className="bg-gray-50 p-8 rounded-lg mt-4">
//            <div className="flex items-start gap-4">
//                <Image src="https://placehold.co/60x60/a0aec0/ffffff.png?text=AS" alt="Ayrton Senna" width={60} height={60} className="rounded-full" />
//                <div>
//                    <p className="font-bold text-lg">Ayrton Senna</p>
//                    <p className="text-sm text-gray-500">CEO & Series Partner at Forge</p>
//                </div>
//            </div>
//            <div className="mt-6 text-gray-700/90 space-y-4 text-base leading-relaxed">
//                <p>At Forge, we believe that getting custom CNC parts should be fast, reliable, and effortless. That's why we built a fully streamlined platform that turns your CAD files into production-grade parts—delivered in as fast as one day. Whether you're prototyping or scaling, we remove the friction from manufacturing so you can focus on building what matters.</p>
//                <p>We operate high-performance CNC machines backed by in-house automation and a trusted network of suppliers. From one-off prototypes to small production runs, our system is built to deliver precise, high-quality parts with speed. You can also reserve your own dedicated machine—we'll machine your parts and have them ready for you—your own production line, without the overhead.</p>
//            </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default RevolutionizingSection;
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
            
              <motion.h2 
  className="text-5xl md:text-7xl font-light leading-tight tracking-tight max-w-4xl mx-auto"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false }}
>
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
            </motion.h2>
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
