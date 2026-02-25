"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryItems = [
  {
    src: "/gallery/foto-1.jpg",
    title: "Gala Dinner - Kebersamaan Keluarga Besar",
  },
  {
    src: "/gallery/foto-2.jpg",
    title: "Momen Hangat Ardana Perkasa Group",
  },
  {
    src: "/gallery/foto-3.jpg",
    title: "Semangat & Keceriaan Tim",
  },
  {
    src: "/gallery/foto-4.jpg",
    title: "Kekompakan dalam Balutan Putih & Coklat",
  },
  {
    src: "/gallery/foto-5.jpg",
    title: "Simbolis Pemotongan Tumpeng & Kue",
  },
];

type LightboxState = {
  open: boolean;
  index: number;
};

export function GalleryCinematicSection() {
  const [mounted, setMounted] = useState(false);
  const [lightbox, setLightbox] = useState<LightboxState>({
    open: false,
    index: 0,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const openAt = (index: number) => {
    setLightbox({
      open: true,
      index,
    });
  };

  const close = () => {
    setLightbox((state) => ({
      ...state,
      open: false,
    }));
  };

  useEffect(() => {
    if (lightbox.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightbox.open]);

  return (
    <section
      id="gallery"
      className="section-pad space-y-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
        className="max-w-3xl space-y-3"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Gallery Cinematic
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12 }}
      >
        <div className="glass-panel overflow-hidden rounded-3xl p-4 shadow-floating">
          <Swiper
            modules={[EffectCoverflow, Autoplay, Pagination]}
            effect="coverflow"
            autoplay={{
              delay: 4500,
            }}
            loop
            slidesPerView={1.1}
            centeredSlides
            spaceBetween={16}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2.4,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={item.src}>
                <button
                  type="button"
                  onClick={() => openAt(index)}
                  className="group relative block w-full cursor-pointer overflow-hidden rounded-2xl border border-gold/20 bg-navy-dark/70 shadow-[0_30px_95px_rgba(0,0,0,0.85)] transition duration-500 hover:border-gold/80 hover:shadow-[0_40px_120px_rgba(0,0,0,0.95)]"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 768px) 280px, 80vw"
                      className="h-full w-full transform object-cover opacity-90 transition duration-700 group-hover:scale-[1.06] group-hover:opacity-100"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/10 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-2xl border border-gold/20 bg-navy-light/50 px-3 py-2 text-left text-xs text-white backdrop-blur-sm">
                      <p className="truncate font-medium">{item.title}</p>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-light-gold/60">
                        Klik untuk tampilan sinematik penuh
                      </p>
                    </div>
                    <div className="pointer-events-none absolute inset-x-6 top-8 h-1 w-10 rounded-full bg-gradient-to-r from-gold/90 via-gold/30 to-transparent opacity-80 blur-xl" />
                  </div>
                  <div className="pointer-events-none absolute inset-0 border border-gold/40" />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>

      {mounted && createPortal(
        <AnimatePresence>
          {lightbox.open && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            >
              <motion.div
                className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-gold/20 bg-navy-dark shadow-2xl"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={close}
                  className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white/80 transition hover:bg-black/80 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="relative aspect-[16/9] w-full bg-black/50">
                  <Image
                    src={galleryItems[lightbox.index].src}
                    alt={galleryItems[lightbox.index].title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    className="object-contain"
                    priority
                  />
                </div>
                
                <div className="flex flex-col gap-4 border-t border-white/10 bg-navy-dark p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium text-gold">
                      {galleryItems[lightbox.index].title}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-white/60">
                      Gallery Ramadan Corporate
                    </p>
                  </div>
                  
                  <button
                    onClick={close}
                    className="w-full rounded-full bg-gold/10 px-8 py-3 text-xs font-semibold uppercase tracking-widest text-gold transition hover:bg-gold hover:text-navy-dark sm:w-auto"
                  >
                    Kembali
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
