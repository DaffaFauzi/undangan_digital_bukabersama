"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import emailjs from "@emailjs/browser";
import { Trash2 } from "lucide-react";

type GuestMessage = {
  id: string;
  name: string;
  message: string;
  createdAt: string;
};

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Nama wajib diisi")
    .max(80, "Nama terlalu panjang"),
  message: z
    .string()
    .min(1, "Pesan wajib diisi")
    .max(400, "Pesan maksimal 400 karakter"),
});

type FormValues = z.infer<typeof formSchema>;

function formatTime(iso: string) {
  try {
    const date = new Date(iso);
    return date.toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

const PAGE_SIZE = 5;

export function PesanKesanSection() {
  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [loading, setLoading] = useState(true);
  
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  const [page, setPage] = useState(1);
  const [sending, setSending] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  // Fetch messages
  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/messages");
      const data = await res.json();
      if (data.status === "success" && Array.isArray(data.data)) {
        setMessages(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const maxPage = Math.max(1, Math.ceil(messages.length / PAGE_SIZE));

  useEffect(() => {
    if (messages.length > 0) {
      setPage(1);
    }
  }, [messages.length]);

  const pagedMessages = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return messages.slice(start, start + PAGE_SIZE);
  }, [messages, page]);

  const handleDelete = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus pesan ini?")) return;
    
    // Optimistic update
    setMessages((prev) => prev.filter((m) => m.id !== id));

    try {
      await fetch(`/api/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "delete_message",
          id: id,
        }),
      });
    } catch (error) {
      console.error("Failed to delete message:", error);
      fetchMessages(); // Revert on error
    }
  };

  const onSubmit = async (values: FormValues) => {
    setSending(true);
    try {
      // 1. Save to Google Sheet via API
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        reset();
        await fetchMessages(); // Refresh list
        
        if (listRef.current) {
          listRef.current.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }

      // 2. Send Email (keep existing functionality)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            guest_name: values.name,
            guest_message: values.message,
            created_at: new Date().toISOString(),
          },
          {
            publicKey,
          }
        );
      }
    } catch (error) {
      console.error("Error submitting message:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="pesan"
      className="section-pad grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)] md:items-start"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <Card className="rounded-3xl border border-gold/20 bg-navy-light/50 shadow-floating">
          <CardHeader>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Pesan & Kesan
            </p>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-light-gold/80">
            <p>
              Form ini ditujukan untuk mengumpulkan pesan singkat, harapan, dan
              kesan Anda terkait acara Buka Bersama Ardana Perkasa Group Dan Milad PT. Dwi Kusuma Perkasa.
            </p>
            <form
              className="space-y-4 pt-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-[0.26em] text-light-gold/60">
                  Nama
                </label>
                <Input
                  placeholder="Nama lengkap"
                  autoComplete="name"
                  {...register("name")}
                  className="border-gold/30 bg-navy/50 text-light-gold placeholder:text-light-gold/30 focus-visible:ring-gold/50"
                />
                {errors.name && (
                  <p className="text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-[0.26em] text-light-gold/60">
                  Pesan
                </label>
                <Textarea
                  placeholder="Tulis pesan singkat atau harapan untuk acara Buka Bersama..."
                  rows={4}
                  {...register("message")}
                  className="border-gold/30 bg-navy/50 text-light-gold placeholder:text-light-gold/30 focus-visible:ring-gold/50"
                />
                {errors.message && (
                  <p className="text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <Button
                  type="submit"
                  rounded="full"
                  disabled={isSubmitting || sending}
                  className="gap-2 bg-gradient-to-br from-gold via-gold-dark to-bronze px-7 text-sm font-semibold text-navy-dark shadow-[0_18px_45px_rgba(212,175,55,0.4)] transition duration-300 hover:brightness-110 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
                >
                  {isSubmitting || sending
                    ? "Mengirim..."
                    : "Kirim Pesan"}
                </Button>
                <p className="text-[11px] text-light-gold/60">
                  Pesan terbaru akan tampil di kartu sebelah kanan.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12 }}
        className="space-y-3"
      >
          <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Pesan Terbaru
          </p>
          <p className="text-xs text-light-gold/60">
            {messages.length} pesan
          </p>
        </div>
          <div
          ref={listRef}
          className="glass-panel flex max-h-[360px] flex-col overflow-hidden rounded-3xl"
        >
                  <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            <AnimatePresence initial={false}>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-gold border-t-transparent" />
                </div>
              ) : pagedMessages.length === 0 ? (
                <motion.p
                  className="text-xs text-light-gold/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Belum ada pesan yang masuk. Jadilah yang pertama
                  menyapa.
                </motion.p>
              ) : (
                pagedMessages.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -6 }}
                    transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                    className="glass-soft relative overflow-hidden rounded-2xl border border-gold/10 px-4 py-3 shadow-sm group"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-white">
                        {item.name}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-[10px] text-light-gold/60">
                          {formatTime(item.createdAt)}
                        </p>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="rounded-full p-1 text-red-400 hover:bg-red-500/10 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Hapus Pesan"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-light-gold/80">
                      {item.message}
                    </p>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
          {messages.length > PAGE_SIZE && (
            <div className="flex items-center justify-between border-t border-gold/10 bg-navy-light/30 px-4 py-2 text-[11px] text-light-gold/60">
              <span>
                Halaman {page} dari {maxPage}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => setPage((value) => Math.max(1, value - 1))}
                  className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Sebelumnya
                </button>
                <button
                  type="button"
                  disabled={page >= maxPage}
                  onClick={() =>
                    setPage((value) => Math.min(maxPage, value + 1))
                  }
                  className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Berikutnya
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
