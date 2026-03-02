"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Building2, ShieldCheck, Users, LineChart, HardHat, Globe2 } from "lucide-react";

const subsidiaries = [
  {
    name: "PT. Buana Perkasa Rajanegara",
    alias: "BPR Bonding",
    icon: ShieldCheck,
    logoSrc: "/logos/bpr-bonding.png",
  },
  {
    name: "PT. Dwi Kusuma Perkasa",
    alias: "DWP Insurance",
    icon: Building2,
    logoSrc: "/logos/dwp.png",
  },
    {
    name: "PT. Sip Bro Delapan Perkasa",
    alias: "Sip Bro",
    icon: LineChart,
    logoSrc: "/logos/sipbro.png",
  },
  {
    name: "PT. Perkasa Lintas Nasional Consultant",
    alias: "PLN Consultant",
    icon: LineChart,
    logoSrc: "/logos/plnc.png",
  },
  {
    name: "PT. Qalifah Jamin Perkasa",
    alias: "Q Jamin",
    icon: HardHat,
    logoSrc: "/logos/qjamin.png",
  },
  {
    name: "PT. Proteksi Perkasa Solutions",
    alias: "Proteksi Plus",
    icon: HardHat,
    logoSrc: "/logos/lpp.png",
  },
  {
    name: "PT. Pataka Prima Perkasa Consultant",
    alias: "Pataka Consultant",
    icon: Users,
    logoSrc: "/logos/pataka.png",
  },
  {
    name: "Prada Badminton Club",
    alias: "Prada BC",
    icon: HardHat,
    logoSrc: "/logos/prada.png",
  },
    {
    name: "PT. Lintas Perkasa Solutions",
    alias: "LPS",
    icon: HardHat,
    logoSrc: "/logos/lps.png",
  },
];

export function BrandingAPGSection() {
  return (
    <section
      id="branding"
      className="section-pad space-y-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
        className="mx-auto max-w-4xl text-center space-y-4"
      >
        <div className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold backdrop-blur-sm">
          Corporate Profile
        </div>
        <h2 className="font-[var(--font-playfair)] text-3xl font-bold leading-tight text-navy-dark sm:text-4xl md:text-5xl">
          <span className="bg-gradient-to-b from-navy-dark to-navy/80 bg-clip-text text-transparent">
            Ardana Perkasa Group
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-navy/70 sm:text-base leading-relaxed">
          Holding company terkemuka yang berkomitmen pada stabilitas ekonomi melalui ekosistem bisnis yang terintegrasi, inovatif, dan berkelanjutan.
        </p>
      </motion.div>

      {/* Subsidiaries Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {subsidiaries.map((company, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="group relative h-full overflow-hidden rounded-3xl border border-gold/10 bg-white/70 p-5 sm:p-6 transition-all duration-300 hover:border-gold/30 hover:bg-white/80 hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]">
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 flex h-full items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 inline-flex h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] items-center justify-center rounded-2xl bg-white/95 ring-1 ring-white/20 shadow-[0_0_15px_rgba(255,255,255,0.08)] overflow-hidden p-2">
                  {company.logoSrc ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={company.logoSrc}
                        alt={company.alias}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 64px, (max-width: 1200px) 72px, 72px"
                      />
                    </div>
                  ) : (
                    <company.icon className="h-8 w-8 text-navy-dark" />
                  )}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-[var(--font-playfair)] text-base sm:text-lg font-semibold text-navy-dark leading-tight">
                    {company.alias}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-medium text-gold/80 uppercase tracking-wider">
                    {company.name}
                  </p>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-navy/70 leading-relaxed">
                    {company.desc}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Visi Misi Card - Spans 2 columns on large screens if needed, or fits nicely in grid */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="sm:col-span-2 lg:col-span-1"
        >
             <div className="group relative h-full overflow-hidden rounded-3xl border border-gold/10 bg-white/70 p-6 transition-all duration-300 hover:border-gold/30 hover:bg-white/80">
                <div className="relative z-10 flex flex-col h-full gap-4">
                    <div>
                        <h3 className="font-[var(--font-playfair)] text-lg font-semibold text-navy-dark mb-2 flex items-center gap-2">
                            <Globe2 className="h-4 w-4 text-gold" />
                            Visi & Misi
                        </h3>
                        <p className="text-sm text-navy/70 leading-relaxed">
                            Menjadi holding company terpercaya yang memberikan nilai tambah bagi seluruh stakeholder.
                        </p>
                    </div>
                    <div className="mt-auto grid grid-cols-2 gap-2">
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="w-full border-gold/20 bg-gold/5 text-xs text-gold hover:bg-gold hover:text-navy-dark"
                        >
                            <a href="https://apg.co.id/" target="_blank" rel="noreferrer">
                                Website
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="w-full border-gold/20 bg-gold/5 text-xs text-gold hover:bg-gold hover:text-navy-dark"
                        >
                            <a href="https://www.instagram.com/ardanaperkasagroup?igsh=Y3FnNW91MjIxMzE4" target="_blank" rel="noreferrer">
                                Instagram
                            </a>
                        </Button>
                    </div>
                </div>
             </div>
        </motion.div>
      </div>
    </section>
  );
}
