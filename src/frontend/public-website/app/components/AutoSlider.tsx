"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface AutoSliderProps {
  images: string[];
  interval?: number;
}

export default function AutoSlider({ images, interval = 4000 }: AutoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, idx) => (
          <div 
            key={idx} 
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-white w-6" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
