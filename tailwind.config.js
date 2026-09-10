/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        char: "#151515",
        char2: "#1e1e1e",
        gold: "#F5C518",
        goldDeep: "#C99A0A",
        ember: "#E2461B",
        bone: "#F7F5EF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        pop: "0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 40px -12px rgba(0,0,0,0.65)",
        popGold: "0 10px 30px -8px rgba(245,197,24,0.45)",
        card3d: "0 2px 0 rgba(255,255,255,0.05) inset, 0 1px 0 rgba(0,0,0,0.4), 0 24px 48px -16px rgba(0,0,0,0.7)",
      },
      backgroundImage: {
        "gold-sheen": "linear-gradient(135deg, #FFE484 0%, #F5C518 35%, #C99A0A 65%, #F5C518 100%)",
        "ink-fade": "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.85) 65%, #0a0a0a 100%)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
