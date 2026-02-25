"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";

const RSVP_SHEET_ENDPOINT = "/api/rsvp";

const RSVP_SHEET_VIEW_URL =
  "https://docs.google.com/spreadsheets/d/1zSURbQU_T-aQ_pc3H5v09lqNfScMd5BX5i-Z1-YWwyg/edit?hl=id&gid=441949537#gid=441949537";

const RSVP_SHEET_CONFIGURED =
  !!RSVP_SHEET_ENDPOINT &&
  !RSVP_SHEET_ENDPOINT.includes("PASTE_YOUR_SCRIPT_URL_HERE");

const RSVP_SHEET_VIEW_CONFIGURED =
  !!RSVP_SHEET_VIEW_URL &&
  !RSVP_SHEET_VIEW_URL.includes("PASTE_SHEET_ID_HERE");

type RSVPChoice = "hadir" | "berhalangan" | null;

export function RSVPSection() {
  const [hadir, setHadir] = useState(0);
  const [berhalangan, setBerhalangan] = useState(0);
  const [choice, setChoice] = useState<RSVPChoice>(null);
  const [nama, setNama] = useState("");
  const [institusi, setInstitusi] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = hadir + berhalangan;

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

      if (choice === "hadir") {
        setHadir((value) => value + 1);
      } else if (choice === "berhalangan") {
        setBerhalangan((value) => value + 1);
      }

      setSubmitted(true);
    } catch {
      setError("Gagal mengirim data. Silakan coba lagi nanti.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="rsvp"
      className="section-pad"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <Card className="rounded-3xl border border-gold/20 bg-navy-light/50 shadow-floating backdrop-blur-sm">
          <CardHeader>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              RSVP Kehadiran
            </p>
            <CardTitle className="text-white">
              Konfirmasi kehadiran Anda untuk Buka Bersama APG.
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
            <div className="space-y-4 text-sm text-light-gold/80">
              <p>
                Mohon kesediaannya untuk memberikan konfirmasi kehadiran para tamu undangan.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  type="button"
                  rounded="full"
                  className="gap-2 bg-gradient-to-r from-gold via-gold-dark to-bronze text-navy-dark shadow-[0_18px_45px_rgba(212,175,55,0.4)] transition duration-300 hover:brightness-110 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
                  onClick={() => handleSelect("hadir")}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Saya Akan Hadir
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  rounded="full"
                  className="gap-2 border-gold/40 text-light-gold hover:border-gold hover:bg-gold/10 hover:text-white"
                  onClick={() => handleSelect("berhalangan")}
                >
                  <XCircle className="h-4 w-4 text-slate-400" />
                  Berhalangan Hadir
                </Button>
              </div>

              {choice && (
                <form
                  onSubmit={handleSubmit}
                  className="mt-4 space-y-4 rounded-2xl border border-gold/20 bg-navy-dark/50 px-4 py-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
                      Data Kehadiran
                    </p>
                    <p className="text-[11px] text-light-gold/80">
                      Status:{" "}
                      <span className="font-medium text-gold">
                        {choice === "hadir"
                          ? "Saya Akan Hadir"
                          : "Berhalangan Hadir"}
                      </span>
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-1">
                      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold/80">
                        Nama Lengkap
                      </p>
                      <Input
                        value={nama}
                        onChange={(event) => setNama(event.target.value)}
                        placeholder="Tuliskan nama lengkap"
                        className="border-gold/30 bg-navy/50 text-light-gold placeholder:text-light-gold/30 focus-visible:ring-gold/50"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold/80">
                        Institusi
                      </p>
                      <Input
                        value={institusi}
                        onChange={(event) => setInstitusi(event.target.value)}
                        placeholder="Perusahaan / Divisi / Unit"
                        className="border-gold/30 bg-navy/50 text-light-gold placeholder:text-light-gold/30 focus-visible:ring-gold/50"
                      />
                    </div>
                    <div className="space-y-1 sm:col-span-2">
                      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold/80">
                        Jabatan
                      </p>
                      <Input
                        value={jabatan}
                        onChange={(event) => setJabatan(event.target.value)}
                        placeholder="Contoh: Manager Operasional"
                        className="border-gold/30 bg-navy/50 text-light-gold placeholder:text-light-gold/30 focus-visible:ring-gold/50"
                      />
                    </div>
                  </div>
                  {error && (
                    <p className="text-[11px] text-red-300">{error}</p>
                  )}
                  {submitted && !error && (
                    <p className="text-[11px] text-emerald-300">
                      Terima kasih, data kehadiran Anda sudah tercatat.
                    </p>
                  )}
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      rounded="full"
                      className="bg-gradient-to-r from-gold to-bronze px-6 text-sm font-semibold text-navy-dark hover:brightness-110"
                      disabled={submitting}
                    >
                      {submitting ? "Mengirim..." : "Kirim Konfirmasi"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
            <div className="space-y-3 text-sm text-light-gold/80">
              <div className="glass-soft flex items-center justify-between rounded-2xl border border-gold/30 px-4 py-3 shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-navy-light/30">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.26em] text-gold">
                    Total Respon
                  </p>
                  <p className="text-xs text-light-gold/60">
                    Simulasi lokal di browser Anda.
                  </p>
                </div>
                <p className="font-[var(--font-playfair)] text-4xl font-semibold text-white">
                  {total}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="glass-soft flex flex-col rounded-2xl border border-white/10 px-4 py-3 bg-navy-light/30">
                  <p className="text-xs font-medium uppercase tracking-[0.26em] text-emerald-300">
                    Akan Hadir
                  </p>
                  <p className="mt-1 font-[var(--font-playfair)] text-3xl font-semibold text-white">
                    {hadir}
                  </p>
                </div>
                <div className="glass-soft flex flex-col rounded-2xl border border-white/10 px-4 py-3 bg-navy-light/30">
                  <p className="text-xs font-medium uppercase tracking-[0.26em] text-light-gold/60">
                    Berhalangan
                  </p>
                  <p className="mt-1 font-[var(--font-playfair)] text-3xl font-semibold text-white">
                    {berhalangan}
                  </p>
                </div>
              </div>
              <div className="pt-1 text-[10px] text-light-gold/60">
                {RSVP_SHEET_VIEW_CONFIGURED ? (
                  <button
                    type="button"
                    onClick={() =>
                      window.open(RSVP_SHEET_VIEW_URL, "_blank", "noopener")
                    }
                    className="inline-flex items-center gap-1 rounded-full border border-gold/30 bg-navy-light/50 px-3 py-1 text-[10px] font-medium text-gold hover:border-gold hover:bg-gold/10"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Lihat rekap RSVP
                  </button>
                ) : (
                  <span>
                    Data RSVP tersimpan otomatis ke spreadsheet internal
                    seksi acara.
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
