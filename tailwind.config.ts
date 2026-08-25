import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--color-canvas) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-light": "rgb(var(--color-primary-light) / <alpha-value>)",
        brand: "rgb(var(--color-brand) / <alpha-value>)",
        "brand-light": "rgb(var(--color-brand-light) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-soft": "rgb(var(--color-accent-soft) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        sage: "rgb(var(--color-sage) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Avenir Next", "Avenir", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
        display: ["Iowan Old Style", "Baskerville", "Times New Roman", "serif"],
      },
      boxShadow: {
        soft: "0 24px 70px -34px rgba(0, 0, 0, 0.86)",
        card: "0 18px 55px -34px rgba(0, 0, 0, 0.82)",
      },
      borderRadius: {
        "4xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
