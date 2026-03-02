"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { OpeningGate } from "@/sections/opening-gate";
import { HeroCountdownSection } from "@/sections/hero-countdown";
import { TentangAcaraSection } from "@/sections/tentang-acara";
import { GalleryCinematicSection } from "@/sections/gallery-cinematic";
import { PesanKesanSection } from "@/sections/pesan-kesan";
import { LokasiSection } from "@/sections/lokasi";
import { BrandingAPGSection } from "@/sections/branding-apg";
import { RSVPSection } from "@/sections/rsvp";
import { GoldenDividerLine } from "@/components/decoration-elements";
import { ScrollingDecorations } from "@/components/scrolling-decorations";

export default function Home() {
  const [opened, setOpened] = useState(false);

  const handleOpened = () => {
    setOpened(true);
  };

  return (
    <>
      {!opened && <OpeningGate onOpened={handleOpened} />}
      
      {opened && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ScrollingDecorations />
          <div className="relative z-10">
            <HeroCountdownSection />
            <DividerKaligrafi text="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" />
            <TentangAcaraSection />
            <DividerKaligrafi text="رَمَضَان مُبَارَك" />
            <GalleryCinematicSection />
            <DividerKaligrafi text="السَّلَامُ عَلَيْكُمْ" />
            <PesanKesanSection />
            <DividerKaligrafi text="تَقَبَّلَ اللّٰهُ مِنَّا وَمِنْكُمْ" />
            <LokasiSection />
            <DividerKaligrafi text="اللَّهُمَّ بَارِكْ لَنَا فِي رَمَضَان" />
            <BrandingAPGSection />
            <DividerKaligrafi text="اللَّهُمَّ لَكَ صُمْتُ" />
            <RSVPSection />
            <DividerKaligrafi text="رَمَضَان كَرِيم" />
            <section className="section-pad border-t border-navy/5 bg-white/50">
              <div className="mx-auto max-w-3xl space-y-8 text-center text-navy-dark">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                      Renungan Ramadhan
                    </p>
                    <p className="mb-2 font-serif text-2xl leading-relaxed text-navy-dark sm:text-3xl" dir="rtl" lang="ar">
                      يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ كُتِبَ عَلَيْكُمُ ٱلصِّيَامُ كَمَا كُتِبَ عَلَى ٱلَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ
                    </p>
                    <p className="text-base italic text-navy/80 sm:text-lg">
                      &quot;Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang-orang sebelum kamu agar kamu bertakwa.&quot;
                    </p>
                    <p className="text-xs text-navy/60">(QS. Al-Baqarah: 183)</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-base italic text-navy/80 sm:text-lg">
                      &quot;Bagi orang yang berpuasa ada dua kebahagiaan: kebahagiaan ketika berbuka puasa dan kebahagiaan ketika bertemu dengan Tuhannya.&quot;
                    </p>
                    <p className="text-xs text-navy/60">(HR. Bukhari dan Muslim)</p>
                  </div>
                </div>
                <div className="glass-panel inline-block rounded-3xl border border-gold/20 bg-white/80 px-6 py-5 text-sm text-navy-dark shadow-sm">
                  <p className="text-balance">
                    Atas perhatian, doa, dan kehadiran Bapak/Ibu/Saudara/i, kami
                    mengucapkan terima kasih. Semoga kebersamaan ini membawa
                    keberkahan dan mempererat silaturahmi di bulan yang suci ini.
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.28em] text-gold font-bold">
                    Manajemen dan Keluarga Besar Ardana Perkasa Group
                  </p>
                </div>
              </div>
            </section>
            <footer className="section-pad border-t border-navy/5 text-center text-sm text-navy/60">
              <p className="mx-auto max-w-2xl italic">
                Semoga kebersamaan ini membawa keberkahan dan mempererat silaturahmi
                di bulan yang suci ini.
              </p>
            </footer>
          </div>
        </motion.div>
      )}
    </>
  );
}

type DividerKaligrafiProps = {
  text: string;
};

function DividerKaligrafi({ text }: DividerKaligrafiProps) {
  return (
    <div className="mx-auto -mt-4 mb-2 flex max-w-5xl items-center justify-center px-4 sm:px-6">
      <GoldenDividerLine className="flex-1 opacity-60" />
      <div className="mx-2 sm:mx-4 shrink-0 rounded-full border border-gold/30 bg-white/80 px-4 py-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.28em] text-navy-dark shadow-sm backdrop-blur-sm">
        {text}
      </div>
      <GoldenDividerLine className="flex-1 opacity-60" reversed />
    </div>
  );
}
