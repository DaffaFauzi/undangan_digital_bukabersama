"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { useAudioStore } from "@/store/useAudioStore";
import { Lantern3D, ArtDecoCorner3D, FloatingParticle } from "@/components/decoration-elements";

type Props = {
  onOpened: () => void;
};

export function OpeningGate({ onOpened }: Props) {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { setPlaying, setMuted } = useAudioStore();

  useEffect(() => {
    setMounted(true);
    if (visible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  const handleOpen = () => {
    setMuted(false);
    setPlaying(true);
    setVisible(false);
    setTimeout(() => {
      onOpened();
    }, 800); // Wait for exit animation
  };

  if (!mounted) return null;

  return createPortal(
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background px-4 h-[100dvh] w-screen overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2319213A' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Floating Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="absolute" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}>
                <FloatingParticle delay={Math.random() * 5} />
            </div>
        ))}
      </div>

      {/* 3D Corner Decorations */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={visible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -50, y: -50 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 left-0 z-20 w-32 h-32 sm:w-48 sm:h-48 pointer-events-none"
      >
        <ArtDecoCorner3D className="w-full h-full" idPrefix="gate-tl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50, y: -50, scaleX: -1 }}
        animate={visible ? { opacity: 1, x: 0, y: 0, scaleX: -1 } : { opacity: 0, x: 50, y: -50, scaleX: -1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 right-0 z-20 w-32 h-32 sm:w-48 sm:h-48 pointer-events-none"
      >
        <ArtDecoCorner3D className="w-full h-full" idPrefix="gate-tr" />
      </motion.div>

      {/* Hanging Lanterns (Matched to Main Invitation) */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 left-0 z-10 pointer-events-none"
      >
         <Lantern3D className="absolute left-0 -top-4 w-24 h-64 sm:w-36 sm:h-96 text-gold drop-shadow-xl" delay={0.5} duration={4} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute top-0 right-0 z-10 pointer-events-none"
      >
         <Lantern3D className="absolute right-0 -top-4 w-24 h-64 sm:w-36 sm:h-96 text-gold drop-shadow-xl" delay={0.8} duration={5} />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-white/20 to-white/90" />
      
      {/* Side Vignette/Pillars (Matched to Main Invitation) */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white/90 to-transparent z-0 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white/90 to-transparent z-0 pointer-events-none" />

      {/* Mosque Silhouette Background */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none opacity-10 text-navy-dark">
        <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,320L0,224L60,224L60,192L80,160L100,192L100,224L180,224L180,160C180,160,200,128,240,128C280,128,300,160,300,160L300,224L360,224L360,144L380,112L400,144L400,224L480,224C480,224,520,160,600,160C680,160,720,224,720,224L780,224L780,128L800,96L820,128L820,224L960,224C960,224,1000,176,1080,176C1160,176,1200,224,1200,224L1260,224L1260,192L1280,160L1300,192L1300,224L1380,224L1380,192L1440,192L1440,320Z" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none opacity-20 text-gold/30">
         <svg viewBox="0 0 1440 320" className="w-full h-auto translate-y-12 scale-110" preserveAspectRatio="none">
             <path fill="currentColor" d="M0,320L0,224L60,224L60,192L80,160L100,192L100,224L180,224L180,160C180,160,200,128,240,128C280,128,300,160,300,160L300,224L360,224L360,144L380,112L400,144L400,224L480,224C480,224,520,160,600,160C680,160,720,224,720,224L780,224L780,128L800,96L820,128L820,224L960,224C960,224,1000,176,1080,176C1160,176,1200,224,1200,224L1260,224L1260,192L1280,160L1300,192L1300,224L1380,224L1380,192L1440,192L1440,320Z" />
         </svg>
      </div>

      {/* Main Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={visible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 1.05, y: -50 }}
        transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative z-10 w-full max-w-md overflow-hidden bg-white/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-y-2 sm:border-y-8 border-gold/60 rounded-2xl sm:rounded-none"
        style={{
            boxShadow: "0 0 0 1px rgba(212, 175, 55, 0.2), 0 20px 50px rgba(212, 175, 55, 0.15)"
        }}
      >
            {/* Ornamental Corners (SVG) */}
            <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 text-gold/60 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                    <path d="M0 0v40c0 10 5 20 15 20h5c5 0 10-5 10-10V20c0-5 5-10 10-10h30c5 0 10-5 10-10V0H0z" />
                    <path d="M10 10v20c0 5 2 10 7 10h3c3 0 5-2 5-5V15c0-3 2-5 5-5h20c3 0 5-2 5-5V10H10z" fillOpacity="0.5"/>
                </svg>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 text-gold/60 pointer-events-none rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                    <path d="M0 0v40c0 10 5 20 15 20h5c5 0 10-5 10-10V20c0-5 5-10 10-10h30c5 0 10-5 10-10V0H0z" />
                    <path d="M10 10v20c0 5 2 10 7 10h3c3 0 5-2 5-5V15c0-3 2-5 5-5h20c3 0 5-2 5-5V10H10z" fillOpacity="0.5"/>
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 text-gold/60 pointer-events-none -rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                    <path d="M0 0v40c0 10 5 20 15 20h5c5 0 10-5 10-10V20c0-5 5-10 10-10h30c5 0 10-5 10-10V0H0z" />
                    <path d="M10 10v20c0 5 2 10 7 10h3c3 0 5-2 5-5V15c0-3 2-5 5-5h20c3 0 5-2 5-5V10H10z" fillOpacity="0.5"/>
                </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 text-gold/60 pointer-events-none rotate-180">
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                    <path d="M0 0v40c0 10 5 20 15 20h5c5 0 10-5 10-10V20c0-5 5-10 10-10h30c5 0 10-5 10-10V0H0z" />
                    <path d="M10 10v20c0 5 2 10 7 10h3c3 0 5-2 5-5V15c0-3 2-5 5-5h20c3 0 5-2 5-5V10H10z" fillOpacity="0.5"/>
                </svg>
            </div>

            <div className="relative px-6 py-10 sm:px-8 sm:py-16 flex flex-col items-center text-center">
                {/* Bismillah / Decorative Header */}
                <div className="mb-6 sm:mb-8 opacity-90">
                    <svg width="140" height="30" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold sm:w-[180px] sm:h-[40px]">
                         <path d="M150 10C100 10 80 30 50 30C20 30 10 40 10 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                         <path d="M150 10C200 10 220 30 250 30C280 30 290 40 290 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                         <circle cx="150" cy="15" r="4" fill="currentColor" />
                    </svg>
                </div>

                <div className="space-y-4 sm:space-y-6">
                    <div>
                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold/80 mb-2 font-medium">
                            Undangan Resmi
                        </p>
                        <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl text-navy-dark bold leading-tight">
                            BUKBER DAN MILAD
                        </h2>
                    </div>

                    <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto opacity-70" />

                    <div>
                        <p className="text-xs sm:text-sm text-navy/70 italic font-serif mb-2">
                            Keluarga Besar
                        </p>
                        <h1 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-gold drop-shadow-sm">
                            Ardana Perkasa Group
                        </h1>
                    </div>

                    <div className="py-3 px-5 sm:py-4 sm:px-6 border border-gold/20 bg-white/60 backdrop-blur-sm rounded-lg mx-auto inline-block">
                        <p className="text-xs sm:text-sm font-medium text-navy-dark">
                            Jumat, 6 Maret 2026
                        </p>
                        <p className="text-[10px] sm:text-xs text-gold/90 mt-1 uppercase tracking-widest">
                            Ramadan 1447 H
                        </p>
                    </div>

                    <div className="pt-6 sm:pt-8 pb-2 sm:pb-4">
                         <p className="text-[10px] sm:text-xs text-navy/60 max-w-[240px] sm:max-w-[260px] mx-auto leading-relaxed mb-5 sm:mb-6">
                            Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara ini.
                        </p>

                        <Button
                            type="button"
                            size="lg"
                            onClick={handleOpen}
                            className="group relative overflow-hidden bg-gold hover:bg-gold-dark text-navy-dark px-10 py-5 sm:px-12 sm:py-6 text-base sm:text-lg font-[var(--font-playfair)] font-bold tracking-wide shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] rounded-full sm:rounded-md"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Buka Undangan
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                        </Button>
                    </div>
                </div>
            </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}
