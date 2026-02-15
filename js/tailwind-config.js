tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: "#F5F4EF", dark: "#E8E3DA" },
        ink: { DEFAULT: "#1E1515", light: "#4A4040" },
        accent: { DEFAULT: "#0052A3", light: "#3378BA", pale: "#E8F0F8" },
        sand: { DEFAULT: "#C4A882", light: "#E0D4BF" },
        muted: "#6B6560",
        "border-custom": "#E0DBD3",
        tcg: { DEFAULT: "#6C5CE7", bg: "#F3F1FD" },
        a5tec: { DEFAULT: "#E17055", bg: "#FDF0ED" },
        ey: { DEFAULT: "#2D3436", bg: "#F0F1F2" },
        adelphi: { DEFAULT: "#0984E3", bg: "#EBF5FD" },
        comwerks: { DEFAULT: "#00B894", bg: "#E8F8F2" },
        "proj-dashboard": "#E17055",
        "proj-pos": "#6C5CE7",
        "proj-accountancy": "#0984E3",
        "proj-biz360": "#00B894",
        "proj-gateway": "#FDCB6E",
        "proj-scs": "#E84393",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        body: ['"Satoshi"', "-apple-system", "sans-serif"],
      },
      animation: {
        morph: "morph 20s ease-in-out infinite",
        "spin-slow": "spin 30s linear infinite",
        "pulse-line": "pulseLine 2s ease-in-out infinite",
        "dot-bounce": "dotBounce 1.4s infinite",
      },
      keyframes: {
        morph: {
          "0%, 100%": { borderRadius: "47% 53% 61% 39% / 45% 51% 49% 55%" },
          "25%": { borderRadius: "55% 45% 38% 62% / 52% 48% 52% 48%" },
          "50%": { borderRadius: "42% 58% 55% 45% / 58% 42% 58% 42%" },
          "75%": { borderRadius: "60% 40% 47% 53% / 40% 55% 45% 60%" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "1", transform: "scaleY(1)" },
          "50%": { opacity: "0.3", transform: "scaleY(0.6)" },
        },
        dotBounce: {
          "0%, 80%, 100%": { transform: "scale(0.6)", opacity: "0.4" },
          "40%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
};
