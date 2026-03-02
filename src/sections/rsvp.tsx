"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

const RSVP_SHEET_ENDPOINT = "/api/rsvp";

const RSVP_SHEET_CONFIGURED =
  !!RSVP_SHEET_ENDPOINT &&
  !RSVP_SHEET_ENDPOINT.includes("PASTE_YOUR_SCRIPT_URL_HERE");

type RSVPChoice = "hadir" | "berhalangan" | null;

export function RSVPSection() {
  const [choice, setChoice] = useState<RSVPChoice>(null);
  const [nama, setNama] = useState("");
  const [institusi, setInstitusi] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSelect = (value: RSVPChoice) => {
    setChoice(value);
    setSubmitted(false);
    setError(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!choice) return;

    if (!nama.trim() || !institusi.trim() || !jabatan.trim()) {
      setError("Mohon lengkapi Nama, Institusi, dan Jabatan.");
      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      if (RSVP_SHEET_CONFIGURED) {
        const payload = {
          nama: nama.trim(),
          institusi: institusi.trim(),
          jabatan: jabatan.trim(),
          status: choice === "hadir" ? "Akan Hadir" : "Berhalangan",
          timestamp: new Date().toISOString(),
        };

        const res = await fetch(RSVP_SHEET_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("Failed to submit");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Gagal mengirim data. Silakan coba lagi nanti.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="section-pad">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <Card className="rounded-3xl border border-gold/20 bg-white/70 shadow-floating backdrop-blur-md overflow-hidden">
          <CardHeader className="border-b border-navy/10 pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-2">
              Reservasi Kehadiran
            </p>
            <CardTitle className="text-navy-dark">
              Konfirmasi Kehadiran
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6 text-sm text-navy/80">
              <p className="leading-relaxed text-center max-w-2xl mx-auto">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu berkenan hadir untuk memberikan doa serta mempererat tali silaturahmi bersama kami.
              </p>
              
              <div className="space-y-3 flex flex-col items-center">
                <p className="text-xs font-medium uppercase tracking-widest text-navy/60">Pilih Status Kehadiran:</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button
                    type="button"
                    rounded="full"
                    size="lg"
                    className={`gap-2 transition-all duration-300 ${choice === 'hadir' ? 'bg-gradient-to-r from-gold via-gold-dark to-bronze text-navy-dark shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105' : 'bg-white/80 text-navy border border-gold/20 hover:border-gold/60'}`}
                    onClick={() => handleSelect("hadir")}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Saya Akan Hadir
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    rounded="full"
                    size="lg"
                    className={`gap-2 transition-all duration-300 ${choice === 'berhalangan' ? 'bg-red-500/10 border-red-500/50 text-red-600 shadow-[0_0_20px_rgba(239,68,68,0.2)] scale-105' : 'bg-white/80 border-gold/20 text-navy hover:border-gold/60'}`}
                    onClick={() => handleSelect("berhalangan")}
                  >
                    <XCircle className="h-4 w-4" />
                    Berhalangan
                  </Button>
                </div>
              </div>

              {choice && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 rounded-2xl border border-gold/10 bg-white/80 p-5 backdrop-blur-sm max-w-xl mx-auto"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-navy/10 pb-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      Formulir Data Diri
                    </p>
                    <Badge variant="outline" className={`${choice === 'hadir' ? 'border-gold text-gold-dark bg-gold/10' : 'border-red-400 text-red-600 bg-red-500/10'}`}>
                        {choice === "hadir" ? "Hadir" : "Berhalangan"}
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-navy/70 ml-1">
                        Nama Lengkap
                      </label>
                      <Input
                        value={nama}
                        onChange={(event) => setNama(event.target.value)}
                        placeholder="Masukkan nama lengkap Anda"
                        className="h-11 border-gold/20 bg-white text-navy-dark placeholder:text-navy/40 focus-visible:ring-gold/50 rounded-xl transition-all focus:bg-white hover:border-gold/40"
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-navy/70 ml-1">
                            Institusi / Perusahaan
                          </label>
                          <Input
                            value={institusi}
                            onChange={(event) => setInstitusi(event.target.value)}
                            placeholder="Asal Instansi"
                            className="h-11 border-gold/20 bg-white text-navy-dark placeholder:text-navy/40 focus-visible:ring-gold/50 rounded-xl transition-all focus:bg-white hover:border-gold/40"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-navy/70 ml-1">
                            Jabatan
                          </label>
                          <Input
                            value={jabatan}
                            onChange={(event) => setJabatan(event.target.value)}
                            placeholder="Posisi / Jabatan"
                            className="h-11 border-gold/20 bg-white text-navy-dark placeholder:text-navy/40 focus-visible:ring-gold/50 rounded-xl transition-all focus:bg-white hover:border-gold/40"
                          />
                        </div>
                    </div>
                  </div>

                  {error && (
                    <div className="rounded-lg bg-red-500/10 p-3 text-xs text-red-600 border border-red-500/20">
                        {error}
                    </div>
                  )}
                  
                  {submitted && !error && (
                    <div className="rounded-lg bg-emerald-500/10 p-3 text-xs text-emerald-700 border border-emerald-500/20 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        Terima kasih, konfirmasi kehadiran Anda telah tersimpan.
                    </div>
                  )}

                  <div className="flex justify-end pt-2">
                    <Button
                      type="submit"
                      rounded="full"
                      className="bg-gradient-to-r from-gold to-bronze px-6 text-sm font-semibold text-navy-dark hover:brightness-110"
                      disabled={submitting}
                    >
                      {submitting ? "Mengirim..." : "Kirim Konfirmasi"}
                    </Button>
                  </div>
                </motion.form>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
