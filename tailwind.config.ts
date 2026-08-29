import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F5",
        paper: "#FFFFFF",
        ink: "#111111",
        muted: "#555555",
        wine: "#6D2433",
        hairline: "#EAEAEA",
      },
      fontFamily: {
        display: ["var(--font-display)", "Frank Ruhl Libre", "David Libre", "serif"],
        body: ["var(--font-body)", "Assistant", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.14em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        studio: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
