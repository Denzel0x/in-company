import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        brand: {
          purple: "#7A2FE0",
          violet: "#5B3FE5",
          blue: "#2F6FE0",
          light: "#6FB8F5",
        },
        slate: {
          DEFAULT: "rgb(var(--color-slate) / <alpha-value>)",
          light: "rgb(var(--color-slate-light) / <alpha-value>)",
        },
        line: "rgb(var(--color-line) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #7A2FE0 0%, #5B3FE5 45%, #2F6FE0 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, rgba(122,47,224,0.08) 0%, rgba(91,63,229,0.08) 45%, rgba(47,111,224,0.08) 100%)",
        grid: "linear-gradient(to right, rgb(var(--color-line)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--color-line)) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
