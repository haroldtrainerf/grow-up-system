import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        paper: "#F7F4EC",
        paperAlt: "#EDE0BE",
        black: "#000000",
        white: "#FFFFFF",
        grow: {
          DEFAULT: "#0FA850",
          light: "#2ED06E",
          dark: "#0A7A3B",
        },
        muted: "#524D3E",
        phase: {
          generar: "#2ED06E",
          reforzar: "#E8944A",
          optimizar: "#6C93E8",
          work: "#E0665A",
        },
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        body: ["var(--font-montserrat)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
