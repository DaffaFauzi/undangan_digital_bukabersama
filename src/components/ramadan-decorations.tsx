"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Lantern3D, ArtDecoCorner3D, FloatingParticle } from "./decoration-elements";

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

      {/* Top Arch (Kubah) Decoration */}
      <div className="absolute top-0 inset-x-0 h-32 sm:h-48 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-full text-gold/20" preserveAspectRatio="none">
           <path fill="url(#arch-gradient)" d="M0,0 L0,100 C200,100 250,250 720,250 C1190,250 1240,100 1440,100 L1440,0 Z" />
           <defs>
             <linearGradient id="arch-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
               <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
             </linearGradient>
           </defs>
        </svg>
        {/* Inner Arch Line */}
        <svg viewBox="0 0 1440 320" className="absolute top-2 inset-x-0 w-full h-full text-navy/40" preserveAspectRatio="none">
           <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,105 C200,105 250,255 720,255 C1190,255 1240,105 1440,105" />
        </svg>
      </div>

      {/* Hanging Lanterns - Main Layer (Symmetrical & Tidy) */}
      <motion.div style={{ y: y2 }} className="absolute inset-x-0 top-0 z-20 pointer-events-none">
        {/* Left Lantern Group */}
        <div className="absolute left-0 top-0">
           <Lantern3D 
            className="absolute left-4 -top-8 w-20 h-56 sm:left-12 sm:w-32 sm:h-80 drop-shadow-2xl" 
            delay={0} 
            duration={6}
            scale={1}
            color="blue" 
          />
        </div>

        {/* Right Lantern Group */}
        <div className="absolute right-0 top-0">
          <Lantern3D 
            className="absolute right-4 -top-8 w-20 h-56 sm:right-12 sm:w-32 sm:h-80 drop-shadow-2xl" 
            delay={1} 
            duration={7}
            scale={1}
            color="blue"
          />
        </div>
      </motion.div>

      {/* Secondary Depth Layer (Subtle & Tucked) */}
      <motion.div style={{ y: y1 }} className="absolute inset-x-0 top-0 z-10 opacity-60 pointer-events-none">
         <Lantern3D 
          className="absolute left-16 -top-16 w-14 h-40 sm:left-36 sm:w-20 sm:h-60 blur-[1px]" 
          delay={2} 
          duration={8}
          scale={0.9}
          color="gold"
        />
        <Lantern3D 
          className="absolute right-16 -top-16 w-14 h-40 sm:right-36 sm:w-20 sm:h-60 blur-[1px]" 
          delay={3} 
          duration={8.5}
          scale={0.9}
          color="gold"
        />
      </motion.div>
      
      {/* Side Pillars/Patterns - Removed for white theme cleanliness or made very subtle */}
      <div className="absolute left-0 top-1/3 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-gold/5 to-transparent z-0" />
      <div className="absolute right-0 top-1/3 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-gold/5 to-transparent z-0" />

      {/* Bottom Footer Decoration (Navy/Gold Curves) */}
      <div className="absolute bottom-0 inset-x-0 h-24 sm:h-32 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          {/* Main Navy Shape */}
          <path fill="#0f1424" d="M0,120 L1440,120 L1440,60 C1200,60 1150,20 720,20 C290,20 240,60 0,60 Z" />
          {/* Gold Border Line */}
          <path fill="none" stroke="#D4AF37" strokeWidth="3" d="M0,60 C240,60 290,20 720,20 C1150,20 1200,60 1440,60" />
          {/* Secondary Gold Line */}
          <path fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.5" d="M0,70 C240,70 290,30 720,30 C1150,30 1200,70 1440,70" />
        </svg>
      </div>

    </div>
  );
}
