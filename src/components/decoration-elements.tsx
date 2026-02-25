"use client";

import { motion } from "framer-motion";

export const Lantern3D = ({
  className,
  delay = 0,
  duration = 3,
  scale = 1,
}: {
  className?: string;
  delay?: number;
  duration?: number;
  scale?: number;
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ rotate: -3, y: 0 }}
      animate={{ 
        rotate: 3, 
        y: [0, 5, 0] 
      }}
      transition={{
        rotate: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: duration,
          ease: "easeInOut",
          delay: delay,
        },
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: duration * 0.7, // Async bobbing
          ease: "easeInOut",
          delay: delay,
        }
      }}
      style={{ originX: 0.5, originY: 0 }}
    >
      {/* Glow Effect behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full bg-gold/20 blur-2xl opacity-60 animate-pulse" />

      <svg 
        viewBox="0 0 100 240" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
        style={{ transform: `scale(${scale})` }}
      >
        <defs>
          <radialGradient id="lantern-glow-3d" cx="0.5" cy="0.6" r="0.5">
            <stop offset="0%" stopColor="#FFF7CC" stopOpacity="1" />
            <stop offset="40%" stopColor="#FFD700" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="gold-metal-3d" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8A6E2F" />
            <stop offset="20%" stopColor="#F5EEDC" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="80%" stopColor="#F5EEDC" />
            <stop offset="100%" stopColor="#8A6E2F" />
          </linearGradient>
        </defs>
        
        {/* String/Chain */}
        <line x1="50" y1="0" x2="50" y2="40" stroke="url(#gold-metal-3d)" strokeWidth="2" />
        
        {/* Top Ring */}
        <circle cx="50" cy="40" r="8" stroke="url(#gold-metal-3d)" strokeWidth="3" fill="none" />
        
        {/* Dome (Top) - 3D Effect with Shading */}
        <path d="M20 70 Q50 20 80 70 L80 80 L20 80 Z" fill="url(#gold-metal-3d)" filter="drop-shadow(0 4px 4px rgba(0,0,0,0.3))" />
        
        {/* Main Body Frame */}
        <path d="M20 80 L15 140 L25 180 L75 180 L85 140 L80 80 Z" fill="#111827" stroke="url(#gold-metal-3d)" strokeWidth="2" />
        
        {/* Glass Windows with Glow */}
        <path d="M25 85 L20 140 L28 175 L72 175 L80 140 L75 85 Z" fill="url(#lantern-glow-3d)" className="animate-pulse" style={{ animationDuration: '4s' }} />

        {/* Decorative Crossbars (Lattice) */}
        <path d="M50 85 L50 175" stroke="url(#gold-metal-3d)" strokeWidth="1.5" opacity="0.8" />
        <path d="M22 140 L78 140" stroke="url(#gold-metal-3d)" strokeWidth="1.5" opacity="0.8" />
        
        {/* Bottom Base */}
        <path d="M25 180 L35 200 L65 200 L75 180 Z" fill="url(#gold-metal-3d)" />
        
        {/* Tassel */}
        <circle cx="50" cy="200" r="4" fill="#D4AF37" />
        <path d="M50 200 Q55 220 50 240 Q45 220 50 200" fill="#D4AF37" opacity="0.8" />
      </svg>
    </motion.div>
  );
};

export const ArtDecoCorner3D = ({ className, idPrefix }: { className?: string; idPrefix: string }) => (
  <div className={className}>
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60 drop-shadow-xl">
      <defs>
        <linearGradient id={`${idPrefix}-gold-gradient-3d`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#19213A" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-gold-stroke-3d`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5EEDC" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8A6E2F" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Rays/Beams */}
      <path d="M0 0 L200 0 L0 200 Z" fill={`url(#${idPrefix}-gold-gradient-3d)`} fillOpacity="0.2" />
      
      {/* 3D Curved Ornaments */}
      <path d="M0 40 Q110 40 160 0" stroke={`url(#${idPrefix}-gold-stroke-3d)`} strokeWidth="2.5" fill="none" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.5))" />
      <path d="M0 90 Q110 90 110 0" stroke={`url(#${idPrefix}-gold-stroke-3d)`} strokeWidth="2.5" fill="none" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.5))" />
      <path d="M0 140 Q60 140 60 0" stroke={`url(#${idPrefix}-gold-stroke-3d)`} strokeWidth="2.5" fill="none" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.5))" />
      
      {/* Jewels/Gems */}
      <g filter="drop-shadow(0 0 5px rgba(212,175,55,0.8))">
        <circle cx="160" cy="0" r="4" fill="#F5EEDC" className="animate-pulse" />
        <circle cx="110" cy="0" r="4" fill="#D4AF37" />
        <circle cx="60" cy="0" r="4" fill="#D4AF37" />
        <circle cx="0" cy="40" r="4" fill="#D4AF37" />
        <circle cx="0" cy="90" r="4" fill="#D4AF37" />
        <circle cx="0" cy="140" r="4" fill="#F5EEDC" className="animate-pulse" />
      </g>
    </svg>
  </div>
);

export const FloatingParticle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute h-1.5 w-1.5 rounded-full bg-gold blur-[0.5px]"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.8, 0],
      scale: [0, 1.2, 0],
      y: [0, -100],
      x: [0, (Math.random() - 0.5) * 50],
    }}
    transition={{
      duration: 5 + Math.random() * 3,
      repeat: Infinity,
      delay: delay,
      ease: "easeOut",
    }}
  />
);

export const RealisticCandle = ({ className, delay = 0, scale = 1 }: { className?: string; delay?: number; scale?: number }) => (
  <motion.div
    className={`relative ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay }}
    style={{ transform: `scale(${scale})`, transformOrigin: "bottom center" }}
  >
    {/* Glow behind flame */}
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-orange-400/30 blur-3xl rounded-full animate-pulse opacity-70" />

    {/* Candle Body (Cylindrical with Warm Wax Gradient) */}
    <div className="w-20 h-32 mx-auto relative rounded-b-xl shadow-lg overflow-hidden">
      {/* Main Body Gradient for 3D effect - Warm Creamy Wax Look */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100/80 via-amber-50 to-amber-200/60" />
      
      {/* Inner Shadow for depth and translucency */}
      <div className="absolute inset-0 shadow-[inset_0_-10px_20px_rgba(180,140,0,0.1),inset_10px_0_20px_rgba(255,255,255,0.4)]" />
      
      {/* Subsurface Scattering Glow at top */}
      <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-yellow-200/40 to-transparent blur-md" />
    </div>

    {/* Candle Top (Perspective Ellipse) */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gradient-to-b from-amber-50 via-white to-amber-100 rounded-[100%] shadow-sm border-t border-white/60">
      {/* Melted Wax Pool */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-3 bg-gradient-to-b from-yellow-100/60 to-orange-100/40 rounded-[100%] blur-[0.5px] shadow-inner" />
      {/* Wick Base */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-800 rounded-full blur-[0.5px]" />
    </div>

    {/* Wick */}
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-gray-800 rounded-t-sm origin-bottom" />

    {/* Flame Animation */}
    <motion.div
      className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-12 origin-bottom"
      animate={{
        scale: [1, 1.05, 0.95, 1.02, 1],
        rotate: [0, 1.5, -1.5, 0.5, 0],
        opacity: [0.9, 1, 0.85, 0.95, 0.9],
        y: [0, -1, 0, -0.5, 0],
      }}
      transition={{
        duration: 2 + Math.random(),
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      {/* Core Flame Shape */}
      <div 
        className="w-full h-full bg-gradient-to-b from-yellow-200 via-orange-500 to-transparent blur-[1px]" 
        style={{ 
          borderRadius: "50% 50% 35% 35% / 80% 80% 20% 20%",
          boxShadow: "0 0 25px 8px rgba(255, 140, 0, 0.5), 0 0 5px 1px rgba(255, 255, 200, 0.8)"
        }} 
      />
      {/* Inner Blue Core */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-4 bg-blue-500/40 blur-[2px] rounded-full" />
      {/* White Hot Center */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2 h-5 bg-white/90 blur-[2px] rounded-full" />
    </motion.div>
  </motion.div>
);

export const GoldenPalmLeaf = ({ className, delay = 0, scale = 1, rotate = 0 }: { className?: string; delay?: number; scale?: number; rotate?: number }) => (
  <motion.div
    className={`relative ${className}`}
    initial={{ opacity: 0, scale: 0, rotate: rotate - 10 }}
    animate={{ opacity: 1, scale: scale, rotate: rotate }}
    transition={{ duration: 1.2, delay, type: "spring", stiffness: 50 }}
  >
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
      <defs>
        <linearGradient id="gold-leaf" x1="0" y1="100" x2="200" y2="0">
          <stop offset="0%" stopColor="#8A6E2F" />
          <stop offset="40%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#F5EEDC" />
          <stop offset="100%" stopColor="#8A6E2F" />
        </linearGradient>
      </defs>
      {/* Palm Leaf Segments */}
      <g stroke="url(#gold-leaf)" strokeWidth="2" fill="url(#gold-leaf)" fillOpacity="0.8">
        <path d="M0 200 Q50 100 100 20" />
        <path d="M0 200 Q70 110 140 40" />
        <path d="M0 200 Q90 120 170 70" />
        <path d="M0 200 Q100 140 190 110" />
        <path d="M0 200 Q100 160 190 150" />
        {/* Leaf Blades */}
        <path d="M100 20 Q80 40 70 80 L0 200 Z" />
        <path d="M140 40 Q120 60 100 100 L0 200 Z" />
        <path d="M170 70 Q150 90 130 130 L0 200 Z" />
        <path d="M190 110 Q170 130 150 160 L0 200 Z" />
        <path d="M190 150 Q170 170 150 190 L0 200 Z" />
      </g>
    </svg>
  </motion.div>
);