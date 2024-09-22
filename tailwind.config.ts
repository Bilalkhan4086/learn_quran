import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
 
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: "#9370db",
        blue: "#88c3fb",
        darkblue: "#0b011d",
        purplish: "#7d00fe",
        greenish: "#46d912",
        dullwhite: "#f5f5f5",
        dullgreenish: "#56e462",
        bluish: "#386bcb",
        dullpurplish: "#5926BC",
        kaizenred: "#F3BE98",
        kaizenyellow: "#E5F382",
        kaizengreen: "#6ddb9a",
        kaizenblue: "#A2FEE5",
        dullgraybg: "#0D1116",
      },
    },
  },
  plugins: [],
};
export default config;
