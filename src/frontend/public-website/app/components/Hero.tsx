"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, useTexture } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useTranslation } from "../i18n/i18nContext";

function RealisticEarth() {
  const earthGroupRef = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  // Load textures from the public folder
  const [colorMap, cloudsMap] = useTexture([
    "/images/earth.jpg",
    "/images/earth-clouds.png"
  ]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (earthGroupRef.current) {
      earthGroupRef.current.rotation.y = time * 0.05; // Earth rotates slowly
      // Add a slight bobbing effect for style
      earthGroupRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = time * 0.07; // Clouds rotate slightly faster than earth
    }
  });

  return (
    <group ref={earthGroupRef} rotation={[0.2, 0, 0]}>
      {/* Earth Surface */}
      <Sphere args={[2.5, 64, 64]}>
        <meshStandardMaterial 
          map={colorMap} 
          roughness={1} 
          metalness={0}
        />
      </Sphere>

      {/* Cloud Layer */}
      <Sphere ref={cloudsRef} args={[2.53, 64, 64]}>
        <meshStandardMaterial 
          map={cloudsMap} 
          transparent={true} 
          opacity={0.8} 
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </Sphere>

      {/* Atmospheric Glow */}
      <Sphere args={[2.7, 64, 64]}>
        <meshBasicMaterial 
          color="#3b82f6" 
          transparent={true} 
          opacity={0.15} 
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen flex flex-col-reverse md:flex-row items-center justify-center overflow-hidden">
      {/* Text Content */}
      <div className="relative z-10 w-full md:w-1/2 px-6 md:px-16 flex flex-col items-start gap-6 mt-20 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--foreground)] leading-tight">
            {t("hero_title_1")} <br />
            <span className="text-[var(--primary)]">{t("hero_title_2")}</span> <br />
            {t("hero_title_3")}
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-[var(--foreground)]/80 max-w-lg leading-relaxed"
        >
          {t("hero_subtitle")}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <a href="#disasters" className="px-8 py-4 rounded-full bg-[var(--primary)] text-[var(--background)] font-bold text-lg hover:bg-[var(--foreground)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center">
            {t("hero_btn_explore")}
          </a>
          <a href="#about" className="px-8 py-4 rounded-full bg-transparent border-2 border-[var(--primary)] text-[var(--primary)] font-bold text-lg hover:bg-[var(--primary)] hover:text-[var(--background)] transition-all text-center">
            {t("hero_btn_learn")}
          </a>
        </motion.div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full md:relative opacity-50 md:opacity-100 z-0 pointer-events-none">
        <Canvas className="w-full h-full" camera={{ position: [0, 0, 5.5] }}>
          <ambientLight intensity={3} />
          <RealisticEarth />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </section>
  );
}
