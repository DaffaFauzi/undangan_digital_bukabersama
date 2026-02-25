"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Hotel+Gren+Alia+Cikini";

export function LokasiSection() {
  return (
    <section
      id="lokasi"
      className="section-pad"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <Card className="rounded-3xl border border-gold/20 bg-navy-light/50 shadow-floating">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Lokasi Acara
              </p>
              <CardTitle className="font-[var(--font-playfair)] text-white text-2xl">
                Hotel Gren Alia Cikini
              </CardTitle>
            </div>
            <div className="hidden h-10 w-10 items-center justify-center rounded-2xl bg-gold/10 text-gold shadow-sm md:flex">
              <MapPin className="h-5 w-5" />
            </div>
          </CardHeader>
          <CardContent className="grid gap-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-center">
            <div className="space-y-3 text-sm text-light-gold/80">
              <p>
                Jl. Cikini Raya No. 46, Jakarta Pusat.
              </p>
              <p className="text-xs text-light-gold/60">
                Lokasi strategis di pusat kota, mudah diakses dengan transportasi umum maupun kendaraan pribadi.
              </p>
              <Button
                asChild
                variant="outline"
                rounded="full"
                size="sm"
                className="mt-2 gap-2 border-gold/40 text-light-gold hover:border-gold hover:bg-gold/10 hover:text-white"
              >
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>
            <div className="mt-3 h-[240px] overflow-hidden rounded-2xl border border-gold/20 bg-navy-dark shadow-sm">
              <iframe
                title="Peta Lokasi Hotel Gren Alia Cikini"
                src="https://maps.google.com/maps?q=Hotel+Gren+Alia+Cikini&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
