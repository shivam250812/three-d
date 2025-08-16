"use client";
import { Canvas } from '@react-three/fiber';
import { Environment, useGLTF, OrbitControls } from '@react-three/drei';
import { Suspense, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const Model = () => {
  const { scene } = useGLTF('/models/model.glb');
  
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        (mesh.material as THREE.MeshStandardMaterial).color.set('white');
        (mesh.material as THREE.MeshStandardMaterial).metalness = 1.0;
        (mesh.material as THREE.MeshStandardMaterial).roughness = 0.45;
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={1.5} position={[0, -2.5, 0]} />;
};

const HeroSection = () => {
  return (
    <section className="h-screen w-full relative text-center pt-32 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 25], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 15, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Model />
            <Environment 
              files="/models/texture.exr" 
              background={false}
            />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} enablePan={false} />
        </Canvas>
      </div>
      <div className="relative z-10 w-full">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tight max-w-4xl mx-auto" 
          initial={{opacity:0,y:50}} 
          whileInView={{opacity:1,y:0}} 
          transition={{duration:0.8, ease: "easeOut"}} 
          viewport={{once:false}}
        >
          Precision <span className="font-extrabold">CNC</span> Parts <br /> Shipped as Fast as Tomorrow
        </motion.h2>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-full px-4 flex flex-col items-center">
        <p className="max-w-lg mx-auto text-gray-600 text-[17px]">
          Upload your CAD file, and we&apos;ll take care of machining, finishing, and shipping—accurate parts delivered fast, no stress.
        </p>
        <button className="mt-7 px-7 py-3.5 bg-gradient-to-r from-blue-500 to-forge-blue text-white font-semibold rounded-md hover:opacity-90 transition-opacity shadow-lg flex items-center gap-3 mx-auto text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
          UPLOAD YOUR DESIGN
        </button>
      </div>
      <div className="absolute bottom-8 left-8 text-left text-[11px] text-gray-400 leading-snug">
        <p>12+ YEARS OF DELIVERING</p>
        <p className="font-semibold text-gray-600">PERFECT DETAILS</p>
      </div>
      <div className="absolute bottom-8 right-8 text-right text-[11px] text-gray-400 leading-snug">
        <p>OVER 100,000 PARTS</p>
        <p className="font-semibold text-gray-600">MANUFACTURED ANNUALLY</p>
      </div>
    </section>
  );
};

useGLTF.preload('/models/model.glb');

export default HeroSection;
