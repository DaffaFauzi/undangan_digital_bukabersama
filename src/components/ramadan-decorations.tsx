"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Lantern3D, ArtDecoCorner3D, FloatingParticle, RealisticCandle, GoldenPalmLeaf } from "./decoration-elements";

export function RamadanDecorations() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 100]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <FloatingParticle delay={Math.random() * 5} />
          </div>
        ))}
      </div>

      {/* Top Corners Art Deco */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-0 top-0 h-48 w-48 sm:h-80 sm:w-80 z-10"
      >
        <ArtDecoCorner3D className="h-full w-full" idPrefix="left" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50, scaleX: -1 }}
        animate={{ opacity: 1, x: 0, scaleX: -1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-0 top-0 h-48 w-48 sm:h-80 sm:w-80 z-10"
      >
        <ArtDecoCorner3D className="h-full w-full" idPrefix="right" />
      </motion.div>

      {/* Hanging Lanterns - Main Layer (Symmetrical & Tidy) */}
      <motion.div style={{ y: y2 }} className="absolute inset-x-0 top-0 z-20 pointer-events-none">
        {/* Left Lantern Group */}
        <div className="absolute left-0 top-0">
           <Lantern3D 
            className="absolute left-2 -top-4 w-24 h-64 sm:left-8 sm:w-36 sm:h-96 text-gold drop-shadow-2xl" 
            delay={0} 
            duration={6}
            scale={1}
          />
        </div>

        {/* Right Lantern Group */}
        <div className="absolute right-0 top-0">
          <Lantern3D 
            className="absolute right-2 -top-4 w-24 h-64 sm:right-8 sm:w-36 sm:h-96 text-gold drop-shadow-2xl" 
            delay={1} 
            duration={7}
            scale={1}
          />
        </div>
      </motion.div>

      {/* Secondary Depth Layer (Subtle & Tucked) */}
      <motion.div style={{ y: y1 }} className="absolute inset-x-0 top-0 z-10 opacity-60 pointer-events-none">
         <Lantern3D 
          className="absolute left-20 -top-12 w-16 h-48 sm:left-40 sm:w-24 sm:h-72 text-gold/80 blur-[1px]" 
          delay={2} 
          duration={8}
          scale={0.9}
        />
        <Lantern3D 
          className="absolute right-20 -top-12 w-16 h-48 sm:right-40 sm:w-24 sm:h-72 text-gold/80 blur-[1px]" 
          delay={3} 
          duration={8.5}
          scale={0.9}
        />
      </motion.div>
      
      {/* Side Pillars/Patterns */}
      <div className="absolute left-0 top-1/3 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-navy-dark/80 to-transparent z-0" />
      <div className="absolute right-0 top-1/3 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-navy-dark/80 to-transparent z-0" />

      {/* Mosque Silhouette Background */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none opacity-20 text-white">
        <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,320L0,224L60,224L60,192L80,160L100,192L100,224L180,224L180,160C180,160,200,128,240,128C280,128,300,160,300,160L300,224L360,224L360,144L380,112L400,144L400,224L480,224C480,224,520,160,600,160C680,160,720,224,720,224L780,224L780,128L800,96L820,128L820,224L960,224C960,224,1000,176,1080,176C1160,176,1200,224,1200,224L1260,224L1260,192L1280,160L1300,192L1300,224L1380,224L1380,192L1440,192L1440,320Z" />
        </svg>
      </div>

    </div>
  );
}
