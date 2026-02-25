"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type AudioState = {
  isMuted: boolean;
  isPlaying: boolean;
  volume: number;
  setMuted: (muted: boolean) => void;
  setPlaying: (playing: boolean) => void;
  setVolume: (volume: number) => void;
};

export const useAudioStore = create<AudioState>()(
  persist(
    (set) => ({
      isMuted: false,
      isPlaying: false,
      volume: 0.4,
      setMuted: (muted) =>
        set({
          isMuted: muted,
        }),
      setPlaying: (isPlaying) =>
        set({
          isPlaying,
        }),
      setVolume: (volume) =>
        set({
          volume,
        }),
    }),
    {
      name: "apg-audio-state",
      partialize: (state) => ({
        isMuted: state.isMuted,
        volume: state.volume,
      }),
    }
  )
);

