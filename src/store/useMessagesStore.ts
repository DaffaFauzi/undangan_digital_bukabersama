"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type GuestMessage = {
  id: string;
  name: string;
  message: string;
  createdAt: string;
};

type MessagesState = {
  messages: GuestMessage[];
  addMessage: (entry: Omit<GuestMessage, "id" | "createdAt">) => GuestMessage;
};

export const useMessagesStore = create<MessagesState>()(
  persist(
    (set, get) => ({
      messages: [],
      addMessage: ({ name, message }) => {
        const entry: GuestMessage = {
          id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
          name,
          message,
          createdAt: new Date().toISOString(),
        };

        set({
          messages: [entry, ...get().messages],
        });

        return entry;
      },
    }),
    {
      name: "apg-messages-production",
    }
  )
);

