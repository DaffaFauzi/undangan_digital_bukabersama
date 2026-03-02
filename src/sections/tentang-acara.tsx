"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Camera, Clock, Coffee, Gift, Mic, Users } from "lucide-react";

const rundown = [
  {
    time: "17.00",
    label: "Pembukaan",
    icon: Users,
    detail: "Pembukaan acara oleh MC.",
  },
  {
    time: "17.25",
    label: "Sambutan & Pemotongan Tumpeng",
    icon: Mic,
    detail: " Sambutan hangat dari Direksi dan Ketua Panitia Pelaksana.",
  },
  {
    time: "17.50",
    label: "Kultum & Buka Puasa",
    icon: Coffee,
    detail: "Ceramah kultum, doa bersama, dilanjut buka puasa dan shalat Maghrib.",
  },
  {
    time: "19.05",
    label: "Game & Doorprize",
    icon: Gift,
    detail: "Sesi permainan seru dan pembagian doorprize menarik.",
  },
  {
    time: "19.50",
    label: "Foto Bersama & Penutupan",
    icon: Camera,
    detail: "Sesi foto bersama seluruh hadirin sekaligus penutupan acara.",
  },
];

export function TentangAcaraSection() {
  return (
    <section
      id="about"
      className="pb-12 pt-6 md:pb-20 md:pt-10 relative space-y-6 md:space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
        className="max-w-3xl space-y-3"
      >
        <Badge variant="outline" className="border-gold/30 text-gold hover:bg-gold/10 backdrop-blur-sm">Tema Acara</Badge>
        <h2 className="font-[var(--font-playfair)] text-2xl font-bold leading-tight text-navy-dark sm:text-3xl">
          Harmony of Ramadhan
        </h2>
        <p className="font-serif text-lg italic text-gold/90 sm:text-xl">
          &quot;Dalam Kebersamaan, Kita Menemukan Keberkahan&quot;
        </p>
        <div className="space-y-4 text-sm text-navy/80 sm:text-base leading-relaxed">
          <p>
            Ramadhan adalah bulan penuh rahmat yang mengajarkan kita arti kebersamaan dan syukur. 
            Melalui acara Buka Puasa Bersama ini, kami ingin merajut kembali tali silaturahmi, 
            memperkuat sinergi, dan berbagi kebahagiaan dalam satu keluarga besar Ardana Perkasa Group.
          </p>
          <p>
            Momen istimewa ini juga menjadi wujud syukur atas pencapaian seluruh unit bisnis di bawah naungan 
            <span className="text-gold font-medium"> Ardana Perkasa Group</span>, 
            sekaligus memperingati Milad ke-4 PT. Dwi Kusuma Perkasa.
          </p>
          <p className="text-xs text-navy/60 italic">
            Anjuran berpakaian: Busana Muslim/Muslimah rapi & sopan.
          </p>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-1 md:items-start">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="space-y-4"
        >
          <p className="-mt-2 mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold md:-mt-3 flex items-center gap-2">
            <Clock className="h-3 w-3" /> Rundown Acara
          </p>
          <div className="space-y-3 relative">
            {/* Connecting Line */}
            <div className="absolute left-[17px] top-4 bottom-4 w-px bg-gradient-to-b from-gold/30 via-gold/10 to-transparent md:left-[19px]" />
            
            {rundown.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  className="group relative z-10 flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:bg-navy/5 hover:border-gold/10"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                >
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-white/5 shadow-[0_0_15px_rgba(212,175,55,0.1)] text-gold group-hover:scale-110 group-hover:border-gold/50 transition-all duration-300">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-sm font-bold text-gold tracking-wider">
                        {item.time} WIB
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-navy-dark group-hover:text-gold transition-colors">
                      {item.label}
                    </h4>
                    <p className="text-xs text-navy/70 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
