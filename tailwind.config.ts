import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "hsl(var(--cream) / <alpha-value>)",
        paper: "hsl(var(--paper) / <alpha-value>)",
        ink: {
          DEFAULT: "hsl(var(--ink) / <alpha-value>)",
          soft: "hsl(var(--ink-soft) / <alpha-value>)",
          mute: "hsl(var(--ink-mute) / <alpha-value>)",
        },
        pitch: {
          DEFAULT: "hsl(var(--pitch) / <alpha-value>)",
          deep: "hsl(var(--pitch-deep) / <alpha-value>)",
          light: "hsl(var(--pitch-light) / <alpha-value>)",
        },
        willow: "hsl(var(--willow) / <alpha-value>)",
        gold: {
          DEFAULT: "hsl(var(--gold) / <alpha-value>)",
          deep: "hsl(var(--gold-deep) / <alpha-value>)",
        },
        line: "hsl(var(--line) / <alpha-value>)",
        danger: "hsl(var(--danger) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        wide: "84rem",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px hsl(30 10% 10% / 0.04), 0 8px 24px hsl(30 10% 10% / 0.06)",
        lift: "0 12px 40px hsl(30 10% 10% / 0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.5s ease-out both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
