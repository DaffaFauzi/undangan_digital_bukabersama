"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import Image from "next/image";

type FlipDigitProps = {
  label: string;
  value: number;
};

function FlipDigit({ label, value }: FlipDigitProps) {
  const padded = value.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center overflow-hidden rounded-md border border-gold/30 bg-white shadow-sm">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={padded}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 flex items-center justify-center font-[var(--font-playfair)] text-sm font-semibold text-navy-dark"
          >
            {padded}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[8px] font-medium uppercase tracking-wider text-navy/60">
        {label}
      </span>
    </div>
  );
}

export function HeroCountdownSection() {
  const countdown = useCountdown();

  return (
    <section
      className="relative flex w-full flex-col items-center justify-start px-4 pt-20 sm:pt-24 pb-10"
      id="hero"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 h-64 w-64 rounded-full bg-gold/10 blur-3xl mix-blend-multiply" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center w-full max-w-2xl mx-auto space-y-2 sm:space-y-4"
      >
        {/* Top Logo APG */}
        <div className="relative mb-2 h-24 w-48 sm:h-32 sm:w-64 mix-blend-multiply">
           <Image
             src="/logos/apgg.png"
             alt="Ardana Perkasa Group"
             fill
             className="object-contain"
             style={{ mixBlendMode: 'multiply' }}
             priority
           />
        </div>

        {/* UNDANGAN */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.4em] text-navy/80 uppercase mb-1">
          Undangan
        </p>

        {/* BUKA PUASA */}
        <h1 className="font-[var(--font-playfair)] text-5xl sm:text-7xl font-bold text-navy-dark tracking-wide leading-none drop-shadow-sm">
          BUKA PUASA
        </h1>

        {/* BERSAMA */}
        <p className="text-xs sm:text-sm font-serif tracking-[0.3em] text-navy/70 uppercase mt-2">
          Bersama
        </p>

        {/* ARDANA PERKASA GROUP */}
        <h3 className="font-[var(--font-playfair)] text-xl sm:text-3xl font-bold text-navy-dark tracking-wide mt-1">
          ARDANA PERKASA GROUP
        </h3>
        <span className="text-[10px] sm:text-xs font-semibold text-navy/60 tracking-[0.15em] uppercase mt-1 mb-2">
          BESERTA SELURUH ANAK PERUSAHAAN
        </span>

        {/* AMPERSAND */}
        <div className="text-2xl sm:text-3xl font-serif text-gold/80 my-1">
          &
        </div>

        {/* MILAD KE-4 */}
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="font-[var(--font-playfair)] text-3xl sm:text-4xl font-bold text-navy-dark uppercase tracking-widest drop-shadow-sm">
            MILAD KE - 4
          </span>
          <span className="text-sm sm:text-base font-semibold text-navy/80 tracking-[0.2em] uppercase mt-1">
            PT Dwi Kusuma Perkasa
          </span>
        </div>

        {/* Intro Text */}
        <p className="text-xs sm:text-sm text-navy/70 max-w-md mx-auto leading-relaxed mt-6 px-4 italic">
          &quot;Dengan Rahmat Allah SWT. Kami mengundang Saudara/i untuk hadir dalam acara buka puasa bersama, yang akan diselenggarakan pada:&quot;
        </p>

        {/* Date/Location Pill */}
        <div className="mt-8 w-full max-w-md">
          <div className="relative rounded-3xl border border-navy/10 bg-white/60 backdrop-blur-md px-8 py-5 shadow-lg shadow-navy/5 flex flex-col items-center gap-2 transform transition-transform hover:scale-105 duration-500">
            <h4 className="font-bold text-navy-dark text-base sm:text-lg">
              Hotel Gren Alia Kwitang, Jakarta
            </h4>
            <div className="h-px w-24 bg-gold/40 my-1" />
            <p className="text-xs sm:text-sm text-navy/80 font-medium tracking-wide">
              11 Maret 2026 | 16.30 - 20.00 WIB
            </p>
          </div>
        </div>

        {/* Minimalist Countdown at Bottom */}
        <div className="mt-10 flex items-center gap-4 opacity-70 scale-90">
           <FlipDigit label="Hari" value={countdown.days} />
           <FlipDigit label="Jam" value={countdown.hours} />
           <FlipDigit label="Menit" value={countdown.minutes} />
           <FlipDigit label="Detik" value={countdown.seconds} />
        </div>

      </motion.div>
    </section>
  );
}
