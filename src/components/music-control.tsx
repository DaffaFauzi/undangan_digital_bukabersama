"use client";

import { useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useAudioStore } from "@/store/useAudioStore";
import { Button } from "@/components/ui/button";

const AUDIO_SRC =
  "/audio/Maher Zain - Ramadan English _ Official Music Video.mp3";

export function MusicControl() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isMuted, volume, isPlaying, setMuted, setPlaying } =
    useAudioStore();

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio(AUDIO_SRC);
      audio.loop = true;
      audio.volume = volume;
      audio.muted = isMuted;
      audioRef.current = audio;
    }
  }, [isMuted, volume]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = isMuted;
    audioRef.current.volume = volume;
  }, [isMuted, volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      // Skip to 20s if starting from beginning
      if (audio.currentTime < 20) {
        audio.currentTime = 20;
      }
      audio
        .play()
        .then(() => {
          if (audioRef.current) {
            audioRef.current.muted = isMuted;
            audioRef.current.volume = volume;
          }
        })
        .catch(() => {
          setPlaying(false);
        });
    } else {
      audio.pause();
    }
  }, [isPlaying, isMuted, volume, setPlaying]);

  const toggleMute = () => {
    setMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0">
      <Button
        type="button"
        variant="outline"
        size="icon"
        rounded="full"
        aria-label={isMuted ? "Aktifkan musik" : "Mute musik"}
        onClick={toggleMute}
        className="group relative overflow-hidden border border-white/20 bg-white/10 text-[#f8f6f0] shadow-lg backdrop-blur-xl"
      >
        <AnimatePresence initial={false} mode="wait">
          {isMuted ? (
            <motion.span
              key="muted"
              initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 12 }}
              transition={{ duration: 0.25 }}
            >
              <VolumeX className="h-5 w-5" />
            </motion.span>
          ) : (
            <motion.span
              key="unmuted"
              initial={{ opacity: 0, scale: 0.6, rotate: 12 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: -12 }}
              transition={{ duration: 0.25 }}
            >
              <Volume2 className="h-5 w-5" />
            </motion.span>
          )}
        </AnimatePresence>
        <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-400/40 via-transparent to-indigo-500/60 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      </Button>
    </div>
  );
}
