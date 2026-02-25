"use client";

import { useState } from "react";
import { OpeningGate } from "@/sections/opening-gate";
import { HeroCountdownSection } from "@/sections/hero-countdown";
import { TentangAcaraSection } from "@/sections/tentang-acara";
import { GalleryCinematicSection } from "@/sections/gallery-cinematic";
import { PesanKesanSection } from "@/sections/pesan-kesan";
import { LokasiSection } from "@/sections/lokasi";
import { BrandingAPGSection } from "@/sections/branding-apg";
import { RSVPSection } from "@/sections/rsvp";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && <OpeningGate onOpened={() => setOpened(true)} />}
      
      <div className={`transition-opacity duration-1000 ${opened ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
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
        <section className="section-pad border-t border-white/10">
          <div className="mx-auto max-w-3xl space-y-8 text-center text-slate-100">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200/90">
                  Renungan Ramadhan
                </p>
                <p className="mb-2 font-serif text-2xl leading-relaxed text-amber-100 sm:text-3xl" dir="rtl" lang="ar">
                  يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ كُتِبَ عَلَيْكُمُ ٱلصِّيَامُ كَمَا كُتِبَ عَلَى ٱلَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ
                </p>
                <p className="text-base italic text-amber-100 sm:text-lg">
                  &quot;Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang-orang sebelum kamu agar kamu bertakwa.&quot;
                </p>
                <p className="text-xs text-amber-100/80">(QS. Al-Baqarah: 183)</p>
              </div>
              <div className="space-y-3">
                <p className="text-base italic text-amber-100 sm:text-lg">
                  &quot;Bagi orang yang berpuasa ada dua kebahagiaan: kebahagiaan ketika berbuka puasa dan kebahagiaan ketika bertemu dengan Tuhannya.&quot;
                </p>
                <p className="text-xs text-amber-100/80">(HR. Bukhari dan Muslim)</p>
              </div>
            </div>
            <div className="glass-panel inline-block rounded-3xl px-6 py-5 text-sm text-slate-100">
              <p className="text-balance">
                Atas perhatian, doa, dan kehadiran Bapak/Ibu/Saudara/i, kami
                mengucapkan terima kasih. Semoga kebersamaan ini membawa
                keberkahan dan mempererat silaturahmi di bulan yang suci ini.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.28em] text-amber-200/90">
                Manajemen dan Keluarga Besar Ardana Perkasa Group
              </p>
            </div>
          </div>
        </section>
        <footer className="section-pad border-t border-white/10 text-center text-sm text-amber-200/90">
          <p className="mx-auto max-w-2xl italic">
            Semoga kebersamaan ini membawa keberkahan dan mempererat silaturahmi
            di bulan yang suci ini.
          </p>
        </footer>
      </div>
    </>
  );
}

type DividerKaligrafiProps = {
  text: string;
};

function DividerKaligrafi({ text }: DividerKaligrafiProps) {
  return (
    <div className="mx-auto -mt-4 mb-2 flex max-w-4xl items-center justify-center px-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="mx-4 rounded-full border border-amber-300/70 bg-amber-50/5 px-4 py-1 text-[11px] font-semibold tracking-[0.28em] text-amber-100/90">
        {text}
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
    </div>
  );
}
