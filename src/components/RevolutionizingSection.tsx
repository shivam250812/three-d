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

const features = [
    { name: 'Custom Brackets', image: 'https://placehold.co/600x400/e2e8f0/4a5568.png?text=CNC+Bracket' },
    { name: 'Steel Adapters', image: 'https://placehold.co/600x400/cbd5e0/4a5568.png?text=Steel+Adapter' },
    { name: 'Motor Mounts', image: 'https://placehold.co/600x400/b2f5ea/4a5568.png?text=Motor+Mount' },
    { name: 'Enclosures', image: 'https://placehold.co/600x400/fed7d7/4a5568.png?text=Metal+Enclosure' },
];

const RevolutionizingSection = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    // REMOVED: bg-white from the section
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-8">
          <div className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            About
          </div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
                  Revolutionizing <br />
                  Manufacturing with <br />
                  Speed and{" "}
                  <span
                    className="italic font-extrabold font-[Playfair_Display] bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, #fdfdfd 0%, #c3c7cc 15%, #8a9099 35%, #f5f5f5 50%, #7b828c 65%, #c0c5cc 85%, #ffffff 100%)",
                      WebkitBackgroundClip: "text",
                      textShadow: `
                        0 2px 4px rgba(0,0,0,0.25),
                        0 1px 2px rgba(255,255,255,0.6)
                      `,
                    }}
                  >
                    Precision
                  </span>
                </h2>





          <div className="border-t border-b border-gray-200">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                onMouseEnter={() => setActiveFeature(feature)}
                className={`cursor-pointer transition-colors duration-300 ${index < features.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <div className={`p-6 flex items-center gap-6 ${activeFeature.name === feature.name ? 'bg-blue-50' : ''}`}>
                  <span className="text-xl font-mono text-gray-400">{`0${index + 1}`}</span>
                  <p className={`text-xl font-semibold ${activeFeature.name === feature.name ? 'text-blue-600' : 'text-gray-800'}`}>
                    {feature.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 relative w-full aspect-video">
             <Image src={activeFeature.image} alt={activeFeature.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="rounded-lg shadow-md object-cover" />
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg mt-4">
           <div className="flex items-start gap-4">
               <Image src="https://placehold.co/60x60/a0aec0/ffffff.png?text=AS" alt="Ayrton Senna" width={60} height={60} className="rounded-full" />
               <div>
                   <p className="font-bold text-lg">Ayrton Senna</p>
                   <p className="text-sm text-gray-500">CEO & Series Partner at Forge</p>
               </div>
           </div>
           <div className="mt-6 text-gray-700/90 space-y-4 text-base leading-relaxed">
               <p>At Forge, we believe that getting custom CNC parts should be fast, reliable, and effortless...</p>
               <p>We operate high-performance CNC machines backed by in-house automation...</p>
           </div>
        </div>
      </div>
    </section>
  );
};
export default RevolutionizingSection;