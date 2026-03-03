"use client";

import type { ReactNode } from "react";
import { MusicControl } from "@/components/music-control";
import { RamadanDecorations } from "@/components/ramadan-decorations";

type Props = {
  children: ReactNode;
};

export function LayoutShell({ children }: Props) {

  return (
    <div className="relative min-h-screen overflow-hidden bg-apg-gradient-surface text-navy-dark">
      <RamadanDecorations />
      
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="ramadan-golden-glow pointer-events-none absolute inset-1/4 rounded-full opacity-40 blur-3xl" />
        <div className="ramadan-star pointer-events-none absolute left-16 top-24 h-1.5 w-1.5 animate-slow-pulse text-gold" />
        <div className="ramadan-star pointer-events-none absolute right-24 top-40 h-1.5 w-1.5 animate-slow-pulse text-gold" />
        <div className="ramadan-star pointer-events-none absolute left-1/2 top-10 h-1.5 w-1.5 animate-slow-pulse text-gold" />
      </div>

      <div className="pointer-events-none fixed inset-x-0 top-0 z-30 flex justify-between px-4 py-4 sm:px-8 sm:py-6">
        <div className="flex items-center gap-3">
          <div className="glass-soft flex h-9 w-9 items-center justify-center rounded-xl border border-gold/30 shadow-md backdrop-blur-md">
            <span className="h-6 w-6 rounded-lg bg-gradient-to-br from-gold via-yellow-400 to-amber-500 shadow-lg shadow-gold/40" />
          </div>
          <div className="hidden flex-col text-xs font-medium uppercase tracking-[0.24em] text-navy-dark sm:flex">
            <span>Ardana Perkasa Group</span>
            <span className="text-[10px] text-navy/60">
              Buka Bersama 11 Maret 2026
            </span>
          </div>
        </div>
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6 md:pb-32 md:pt-32">
        <div className="ramadan-border mb-10 h-px w-full opacity-70" />
        <div className="invitation-surface rounded-[32px] border border-gold/15 p-6 text-navy-dark shadow-xl backdrop-blur-md sm:shadow-[0_40px_120px_rgba(15,23,42,0.15)] sm:backdrop-blur-2xl sm:p-8">
          {children}
        </div>
        <div className="ramadan-border mt-10 h-px w-full opacity-70" />
      </main>

      <MusicControl />
    </div>
  );
}
