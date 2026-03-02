import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/store/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        navy: {
          DEFAULT: "#19213A",
          light: "#232d4b",
          dark: "#0f1424",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F5EEDC",
          dark: "#B4941F",
        },
        bronze: {
          DEFAULT: "#E34F3C",
        },
        glow: "rgba(212, 175, 55, 0.15)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        floating: "0 15px 50px rgba(0,0,0,0.15)",
      },
      backgroundImage: {
        "apg-gradient":
          "radial-gradient(circle at top, rgba(37,99,235,0.16), transparent 60%), radial-gradient(circle at bottom, rgba(30,64,175,0.22), #0f172a)",
        "ramadan-pattern":
          "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "slow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "gradient-move": {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(-10px,10px,0)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "flip-down": {
          "0%": { transform: "rotateX(90deg)", opacity: "0" },
          "100%": { transform: "rotateX(0deg)", opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "slow-pulse": "slow-pulse 8s ease-in-out infinite",
        "gradient-move": "gradient-move 16s ease-in-out infinite",
        sparkle: "sparkle 5s ease-in-out infinite",
        "flip-down": "flip-down 600ms ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
