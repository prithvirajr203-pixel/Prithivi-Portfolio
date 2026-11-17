/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        background: "#050505",
        surface: "#0B0B0B",
        "surface-light": "#151515",
        gold: {
          DEFAULT: "#D4AF37",
          bright: "#F5C542",
          dark: "#9C7418",
        },
        silver: {
          DEFAULT: "#C0C0C0",
          light: "#E5E5E5",
        },
        offwhite: "#F5F5F5",
        muted: "#999999",
        line: "#292929",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F5C542 0%, #D4AF37 50%, #9C7418 100%)",
      },
      boxShadow: {
        gold: "0 0 40px -10px rgba(212,175,55,0.35)",
        "gold-sm": "0 0 20px -8px rgba(212,175,55,0.4)",
      },
      keyframes: {
        pulseGold: {
          "0%, 100%": { opacity: 1, boxShadow: "0 0 0 0 rgba(212,175,55,0.55)" },
          "50%": { opacity: 0.6, boxShadow: "0 0 0 6px rgba(212,175,55,0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        pulseGold: "pulseGold 2.4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
