"use client";

import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF, Preload, PerformanceMonitor } from '@react-three/drei';
import * as THREE from 'three';
import { useAnimationStore } from '@/lib/store';

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import RevolutionizingSection from "@/components/RevolutionizingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PopularDetailsSection from "@/components/PopularDetailsSection";
import Footer from "@/components/Footer";

const Model = () => {
  const { scene } = useGLTF('/models/model.glb');
  const { activeSection } = useAnimationStore();
  const groupRef = useRef<THREE.Group>(null!);

  const targetStates = {
    hero: { position: new THREE.Vector3(0, -2.5, 0), rotation: new THREE.Euler(0, 0, 0) },
    details: { position: new THREE.Vector3(-5, 0, 10), rotation: new THREE.Euler(0.5, 0.8, 0) },
  };

  useFrame(() => {
    if (!groupRef.current) return;
    const target = targetStates[activeSection];
    groupRef.current.position.lerp(target.position, 0.05);
    const targetQuaternion = new THREE.Quaternion().setFromEuler(target.rotation);
    groupRef.current.quaternion.slerp(targetQuaternion, 0.05);
    if (activeSection === 'hero') {
      groupRef.current.rotation.y += 0.001;
    }
  });
  
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

  return <primitive ref={groupRef} object={scene} scale={1.5} />;
};

export default function Home() {
  // This state will track if the performance is poor
  const [isLagging, setIsLagging] = useState(false);

  return (
    <main>
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Canvas camera={{ position: [0, 0, 25], fov: 45 }}>
          {/* This component will now set isLagging to true if performance drops.
            onIncline is called when performance recovers.
          */}
          <PerformanceMonitor onDecline={() => setIsLagging(true)} onIncline={() => setIsLagging(false)} />

          <color attach="background" args={['#ffffff']} />
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 15, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Model />
            
            {/* This is the key change:
              - If not lagging, we use the high-quality (but expensive) .exr reflections.
              - If lagging, we switch to a much simpler and faster preset environment.
            */}
            {isLagging ? (
              <Environment preset="city" />
            ) : (
              <Environment files="/models/texture.exr" />
            )}
            
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
      
      <Navbar />
      <HeroSection />
      <VideoSection />
      <section id="story-section">
        <RevolutionizingSection />
      </section>
      <section id="tool-library-section">
        <HowItWorksSection />
      </section>
      <section id="manufacture-section">
        <PopularDetailsSection />
      </section>
      <Footer />
    </main>
  );
}