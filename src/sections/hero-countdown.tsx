"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Clock3, MapPin, Phone, Shirt } from "lucide-react";
import { useCountdown } from "@/hooks/useCountdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type FlipDigitProps = {
  label: string;
  value: number;
};

function FlipDigit({ label, value }: FlipDigitProps) {
  const padded = value.toString().padStart(2, "0");

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <div className="glass-soft relative flex h-16 w-full items-center justify-center overflow-hidden rounded-2xl border border-gold/20 bg-navy-light/50 shadow-floating sm:h-20">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={padded}
            initial={{ y: "40%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-40%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 flex items-center justify-center font-[var(--font-playfair)] text-3xl font-semibold tracking-widest text-gold sm:text-4xl"
          >
            {padded}
          </motion.span>
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
      </div>
      <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-light-gold/60">
        {label}
      </span>
    </div>
  );
}

export function HeroCountdownSection() {
  const countdown = useCountdown();

  return (
    <section
      className="section-pad relative grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center"
      id="hero"
    >
      <div className="pointer-events-none absolute -right-16 top-10 hidden h-72 w-72 rounded-full bg-gradient-to-br from-navy-light/40 via-navy/10 to-transparent blur-3xl md:block" />
      <div className="pointer-events-none absolute -left-24 bottom-0 hidden h-72 w-72 rounded-full bg-gradient-to-br from-gold/10 via-navy-light/10 to-transparent blur-3xl md:block" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative z-10 flex flex-col gap-6"
      >
        <Badge variant="glow" className="self-start border-gold/30 bg-gold/10 text-gold">
          Undangan Resmi Buka Bersama
        </Badge>
        <div className="space-y-4">
          <div className="space-y-1 text-xs text-light-gold/80 sm:text-sm">
            <p>Dengan memohon rahmat dan ridho Allah SWT,</p>
            <p>
              serta dalam rangka mempererat tali silaturahmi di bulan suci
              Ramadhan 1447 H,
            </p>
            <p className="mt-3 font-medium text-white">
              Manajemen dan Keluarga Besar{" "} Ardana Perkasa Group
            </p>
            <p>Dengan hormat mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara:</p>
          </div>
          <h1 className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-gold via-light-gold to-gold bg-clip-text text-transparent">
              BUKA BERSAMA
            </span>
            <span className="mt-1 block text-sm font-semibold text-white/90 sm:text-xs">
              Ardana Perkasa Group
            </span>
            <span className="mt-1 block text-sm font-semibold text-white/90 sm:text-xs">
              Dan 
            </span>
            <span className="bg-gradient-to-r from-gold via-light-gold to-gold bg-clip-text text-transparent">
              MILAD
            </span>
            <span className="mt-1 block text-sm font-semibold text-white/90 sm:text-xs">
              PT. Dwi Kusuma Perkasa
            </span>
          </h1>
          <div className="h-px w-28 bg-gradient-to-r from-gold via-gold-dark to-transparent" />
          <p className="text-balance text-sm text-light-gold/80 sm:text-base">
            Mempererat kebersamaan insan Ardana Perkasa Group dalam suasana
            Ramadhan yang hangat, sakral, dan penuh rasa syukur.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-light-gold/80 sm:text-base">
          <div className="glass-panel grid gap-3 rounded-2xl border border-gold/20 bg-navy-light/30 px-6 py-4 text-xs sm:grid-cols-2 sm:text-sm">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-gold/10 text-gold">
                <CalendarDays className="h-3.5 w-3.5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold">
                  Hari / Tanggal
                </p>
                <p className="text-sm text-white">Jumat, 6 Maret 2026</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Clock3 className="h-3.5 w-3.5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold">
                  Waktu
                </p>
                <p className="text-sm text-white">17.00 WIB – 20.00 WIB</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-gold/10 text-gold">
                <MapPin className="h-3.5 w-3.5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold">
                  Tempat
                </p>
                <p className="text-sm text-white">
                  Hotel Gren Alia Cikini, Menteng.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-4">
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative z-10"
      >
        <div className="glass-panel relative flex flex-col items-center gap-6 rounded-3xl border border-gold/30 bg-navy-light/30 px-6 py-7 shadow-[0_0_55px_rgba(212,175,55,0.15)] sm:px-8 sm:py-9">
          <div className="flex w-full items-center justify-between text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
            <span>Countdown</span>
            <span>Buka Puasa</span>
          </div>
          <div className="grid w-full grid-cols-4 gap-2 sm:gap-6">
            <FlipDigit label="Hari" value={countdown.days} />
            <FlipDigit label="Jam" value={countdown.hours} />
            <FlipDigit label="Menit" value={countdown.minutes} />
            <FlipDigit label="Detik" value={countdown.seconds} />
          </div>
          <div className="mt-2 flex w-full items-center justify-between text-[11px] text-light-gold/60">
            <span>Menuju Buka Bersama</span>
            <span>WIB • Jakarta</span>
          </div>
        </div>
        <div className="pointer-events-none absolute -left-10 -top-10 h-20 w-20 animate-float rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/10 via-white/5 to-transparent shadow-xl shadow-gold/10" />
        <div className="pointer-events-none absolute -right-8 bottom-10 h-16 w-16 animate-float rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/10 via-white/5 to-transparent shadow-lg shadow-gold/10" />
      </motion.div>
    </section>
  );
}
