"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe2, Instagram, Linkedin, Mail } from "lucide-react";

type CounterProps = {
  label: string;
  to: number;
  suffix?: string;
};

function Counter({ label, to, suffix }: CounterProps) {
  const value = useMotionValue(0);
  const rounded = useTransform(value, (current) =>
    Math.round(current).toString()
  );

  useEffect(() => {
    const controls = animate(value, to, {
      duration: 1.8,
      ease: [0.2, 0.7, 0.4, 1],
    });

    return () => controls.stop();
  }, [to, value]);

  return (
    <div className="glass-soft flex flex-col gap-1 rounded-2xl border border-gold/10 bg-navy-light/30 px-4 py-3">
      <span className="text-xs font-medium uppercase tracking-[0.26em] text-light-gold/60">
        {label}
      </span>
      <span className="text-2xl font-semibold text-white">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </span>
    </div>
  );
}

export function BrandingAPGSection() {
  return (
    <section
      id="branding"
      className="section-pad space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
        className="max-w-4xl space-y-4"
      >
        <div className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold backdrop-blur-sm">
          Siapa Kami
        </div>
        <h2 className="font-[var(--font-playfair)] text-3xl leading-tight text-white sm:text-4xl">
          Ardana Perkasa Group
        </h2>
        <p className="text-sm text-light-gold/80 sm:text-base leading-relaxed">
          Ardana Perkasa Group (APG) adalah perusahaan holding terkemuka di Indonesia yang berkomitmen pada stabilitas dan pertumbuhan ekonomi melalui solusi bisnis yang inovatif.
        </p>
        <p className="text-sm text-light-gold/80 sm:text-base leading-relaxed">
          APG menaungi beberapa anak perusahaan yang bergerak disektor pendukung Lembaga Keuangan serta sektor olahraga, memperluas jangkauannya dalam mendukung berbagai industri yang berkontribusi pada perkembangan ekonomi dan sosial.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Card className="h-full rounded-3xl border border-gold/20 bg-navy-light/50 shadow-floating">
            <CardHeader>
              <CardTitle className="text-white text-xl">Visi & Misi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-sm text-light-gold/80">
              <div>
                <h4 className="mb-2 font-semibold text-gold uppercase tracking-wider text-xs">Visi</h4>
                <p>
                  Menjadi salah satu holding company terbesar di Indonesia melalui layanan inovatif, terpercaya, dan bermanfaat bagi shareholder dan stakeholder.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-gold uppercase tracking-wider text-xs">Misi</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span>Membangun keunggulan kompetitif.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span>Mendukung Stabilitas Keuangan.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span>Meningkatkan Kepercayaan Pelanggan.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span>Mendukung Pertumbuhan Bisnis Anak Perusahaan.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span>Mengutamakan Etika dan Kepatuhan.</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  variant="outline"
                  rounded="full"
                  size="sm"
                  className="w-full gap-2 border-gold/30 text-light-gold hover:border-gold hover:bg-gold/10 hover:text-white sm:w-auto"
                >
                  <a href="https://apg.co.id/" target="_blank" rel="noreferrer">
                    <Globe2 className="h-4 w-4" />
                    Website Resmi
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  rounded="full"
                  size="sm"
                  className="w-full gap-2 border-gold/30 text-light-gold hover:border-gold hover:bg-gold/10 hover:text-white sm:w-auto"
                >
                  <a href="https://www.instagram.com/ardanaperkasagroup?igsh=Y3FnNW91MjIxMzE4" target="_blank" rel="noreferrer">
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  rounded="full"
                  size="sm"
                  className="w-full gap-2 border-gold/30 text-light-gold hover:border-gold hover:bg-gold/10 hover:text-white sm:w-auto"
                >
                  <a href="https://www.linkedin.com/in/ardana-perkasa-group-a3aa78390/" target="_blank" rel="noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="space-y-4"
        >
           <Card className="h-full rounded-3xl border border-gold/20 bg-navy-light/30 shadow-floating">
            <CardHeader>
              <CardTitle className="font-[var(--font-playfair)] text-white text-2xl">Anak Perusahaan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <p className="text-sm text-light-gold/60 mb-4">
                 Bergerak di sektor pendukung Lembaga Keuangan dan Konsultan:
               </p>
               <ul className="space-y-3">
                  {[
                    "PT. Buana Perkasa Rajanegara (BPR Bonding)",
                    "PT. Dwi Kusuma Perkasa (DWP Insurance)",
                    "PT. Perkasa Lintas Nasional Consultant (PLN Consultant)",
                    "PT. Pataka Prima Perkasa Consultant (Pataka Consultant)",
                    "PT. Proteksi Perkasa Solutions (Proteksi Plus)"
                  ].map((company, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 rounded-xl bg-navy-dark/40 border border-gold/5 hover:border-gold/20 transition-colors">
                      <div className="mt-1 h-2 w-2 rounded-full bg-gold shrink-0" />
                      <span className="text-sm text-light-gold/90 font-medium">{company}</span>
                    </li>
                  ))}
               </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
