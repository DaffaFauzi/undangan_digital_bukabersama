"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollingDecorations() {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y1 = useTransform(smoothProgress, [0, 1], [0, -300]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -500]);
  const y3 = useTransform(smoothProgress, [0, 1], [0, -200]);
  const rotate1 = useTransform(smoothProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(smoothProgress, [0, 1], [0, -180]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  if (!mounted) return null;

  const particleCount = isMobile ? 12 : 25;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Background Gradient Mesh - Dynamic Breathing */}
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_60%)]" 
      />

      {/* Floating Dust Particles */}
      {Array.from({ length: particleCount }).map((_, i) => (
        <FloatingParticle key={`dust-${i}`} index={i} />
      ))}

      {/* Parallax Geometric Shapes */}
      <motion.div style={{ y: y1, opacity }} className="absolute left-[5%] top-[15%] text-gold/10">
         <Diamond size={isMobile ? 24 : 48} />
      </motion.div>
      
      <motion.div style={{ y: y2, rotate: rotate1, opacity }} className="absolute right-[8%] top-[25%] text-gold/10">
         <Hexagon size={isMobile ? 48 : 96} />
      </motion.div>
      
      <motion.div style={{ y: y3, rotate: rotate2, opacity }} className="absolute left-[10%] top-[45%] text-gold/5">
         <GeometricPattern size={isMobile ? 100 : 200} />
      </motion.div>

       <motion.div style={{ y: y2, opacity }} className="absolute right-[5%] top-[60%] text-gold/10">
         <Diamond size={isMobile ? 24 : 36} />
      </motion.div>
      
      <motion.div style={{ y: y1, rotate: rotate1, opacity }} className="absolute left-[8%] top-[80%] text-gold/10">
         <Hexagon size={isMobile ? 36 : 72} />
      </motion.div>

      {/* Rotating Mandala Backgrounds - Very subtle */}
      <motion.div 
        style={{ rotate: rotate1, opacity: 0.03 }} 
        className="absolute -left-20 top-1/4 text-gold"
      >
        <Mandala size={isMobile ? 300 : 500} />
      </motion.div>
      
      <motion.div 
        style={{ rotate: rotate2, opacity: 0.03 }} 
        className="absolute -right-20 bottom-1/3 text-gold"
      >
        <Mandala size={isMobile ? 300 : 500} />
      </motion.div>

      {/* Side Glows */}
      <div className="absolute top-1/3 left-0 w-32 h-96 bg-gradient-to-r from-gold/5 to-transparent blur-3xl opacity-30" />
      <div className="absolute bottom-1/3 right-0 w-32 h-96 bg-gradient-to-l from-gold/5 to-transparent blur-3xl opacity-30" />

      {/* Shooting Stars - CSS Animation */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="shooting-star" style={{ top: '15%', left: '10%', animationDelay: '2s' }} />
        <div className="shooting-star" style={{ top: '65%', left: '85%', animationDelay: '8s' }} />
        <div className="shooting-star" style={{ top: '40%', left: '50%', animationDelay: '15s' }} />
      </div>

      <style jsx>{`
        .shooting-star {
          position: absolute;
          width: 0;
          height: 1px;
          background: linear-gradient(to right, rgba(212,175,55,0), rgba(212,175,55,1));
          box-shadow: 0 0 4px rgba(212,175,55,0.8);
          animation: shoot 10s linear infinite;
          transform: rotate(-45deg);
        }
        @keyframes shoot {
          0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 0; width: 0; }
          5% { opacity: 1; width: 150px; }
          10% { transform: translateX(-300px) translateY(300px) rotate(-45deg); opacity: 0; width: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function FloatingParticle({ index }: { index: number }) {
  const randomDuration = 10 + Math.random() * 15;
  const randomDelay = Math.random() * -20;
  const randomX = Math.random() * 100;
  const randomSize = 2 + Math.random() * 3;
  
  return (
    <motion.div
      className="absolute -bottom-4 rounded-full bg-gold/20 blur-[1px]"
      style={{ 
        left: `${randomX}%`,
        width: randomSize,
        height: randomSize,
      }}
      animate={{
        y: [0, -1200],
        x: [0, Math.sin(index) * 80],
        opacity: [0, 0.5, 0],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: randomDelay,
        ease: "linear",
      }}
    />
  );
}

function Diamond({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-sm">
      <path d="M12 0L24 12L12 24L0 12L12 0Z" />
    </svg>
  );
}

function Hexagon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="drop-shadow-sm">
             <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" />
             <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.3" />
        </svg>
    )
}

function GeometricPattern({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="drop-shadow-sm">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="35" opacity="0.5" />
            <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
            <rect x="35" y="35" width="30" height="30" transform="rotate(45 50 50)" opacity="0.5" />
        </svg>
    )
}

function Mandala({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3" className="drop-shadow-sm">
       {/* Simple 8-point star pattern */}
       <path d="M50 0 L60 35 L95 50 L60 65 L50 100 L40 65 L5 50 L40 35 Z" opacity="0.6"/>
       <circle cx="50" cy="50" r="25" />
       <circle cx="50" cy="50" r="15" opacity="0.5"/>
       <circle cx="50" cy="50" r="5" fill="currentColor" fillOpacity="0.1"/>
    </svg>
  );
}
