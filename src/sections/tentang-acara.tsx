"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    time: "17.10",
    label: "Sambutan Direksi & Ketua Panitia",
    icon: Mic,
    detail: "Sambutan hangat dari Direksi dan Ketua Panitia Pelaksana.",
  },
  {
    time: "18.00",
    label: "Kultum & Buka Puasa",
    icon: Coffee,
    detail: "Ceramah kultum, doa bersama, dilanjut buka puasa dan shalat Maghrib.",
  },
  {
    time: "19.00",
    label: "Game & Doorprize",
    icon: Gift,
    detail: "Sesi permainan seru dan pembagian doorprize menarik.",
  },
  {
    time: "20.00",
    label: "Foto Bersama & Penutupan",
    icon: Camera,
    detail: "Sesi foto bersama seluruh hadirin sekaligus penutupan acara.",
  },
];

export function TentangAcaraSection() {
  return (
    <section
      id="about"
      className="section-pad relative space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
        className="max-w-3xl space-y-4"
      >
        <Badge variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">Tentang Acara</Badge>
        <h2 className="font-[var(--font-playfair)] text-2xl font-bold leading-tight text-white sm:text-3xl">
          Harmony of Ramadhan
        </h2>
        <p className="font-serif text-lg italic text-gold/90 sm:text-xl">
          Dalam Kebersamaan, Kita Menemukan Keberkahan
        </p>
        <div className="space-y-4 text-sm text-light-gold/80 sm:text-base">
          <p>
            Buka Puasa Bersama ini menjadi momen istimewa untuk menyatukan hati
            dalam suasana Ramadhan yang penuh makna. Melalui kebersamaan yang
            hangat dan penuh rasa syukur, kita mempererat silaturahmi, memperkuat
            hubungan, serta menumbuhkan semangat kolaborasi yang harmonis.
          </p>
          <p>
            Dalam satu waktu berbuka dan doa yang dipanjatkan bersama, kita tidak
            hanya berbagi hidangan, tetapi juga berbagi harapan, kebaikan, dan
            keberkahan yang membawa kebaikan bagi kita semua.
          </p>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Card className="rounded-3xl border border-gold/20 bg-navy-light/50 shadow-floating">
            <CardHeader>
              <CardTitle className="font-[var(--font-playfair)] text-white text-2xl">
                Elegan dalam Nuansa Navy Blue & White.
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-light-gold/80">
              <p>
                Mengusung tema warna Biru Dongker dan Putih sesuai dengan tema acara buka bersama dan milad ini,
                acara ini menghadirkan atmosfer yang tenang, profesional, namun
                tetap hangat dan bersahabat.
              </p>
              <p>
                Setiap detail dirancang untuk kenyamanan tamu undangan,
                menciptakan ruang interaksi yang harmonis untuk saling berbagi
                cerita dan memperkuat hubungan kerjasama.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Rundown Singkat
          </p>
          <div className="space-y-3">
            {rundown.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  className="glass-soft flex items-start gap-3 rounded-2xl border border-gold/10 bg-navy-light/30 px-4 py-3 transition duration-300 hover:border-gold/40 hover:bg-gold/5 hover:shadow-[0_0_45px_rgba(212,175,55,0.15)]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.18 + index * 0.08,
                  }}
                >
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-gold/10 text-gold shadow-sm">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-light-gold/60">
                        {item.time}
                      </p>
                      <p className="text-xs text-light-gold/60 opacity-70">
                        WIB
                      </p>
                    </div>
                    <p className="mt-1 text-sm font-medium text-white">
                      {item.label}
                    </p>
                    <p className="text-xs text-light-gold/80">
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
