"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      rounded="full"
      onClick={toggleTheme}
      aria-label="Toggle tema"
      className="relative overflow-hidden border border-white/20 bg-white/10 text-[#f8f6f0] shadow-sm backdrop-blur-md"
    >
      <AnimatePresence initial={false} mode="wait">
        {theme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -18, scale: 0.6, y: 6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
            exit={{ opacity: 0, rotate: 18, scale: 0.6, y: -6 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <Sun className="h-5 w-5 text-amber-300" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 18, scale: 0.6, y: -6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
            exit={{ opacity: 0, rotate: -18, scale: 0.6, y: 6 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <Moon className="h-5 w-5 text-sky-400" />
          </motion.span>
        )}
      </AnimatePresence>
      <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-400/30 via-transparent to-indigo-500/40 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
    </Button>
  );
}
