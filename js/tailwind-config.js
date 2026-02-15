tailwind.config = {
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#0B0B0B", surface: "#141414", elevated: "#1C1C1C", hover: "#242424" },
        text: { DEFAULT: "#EDEBE8", dim: "#8A8580", faint: "#5A5550" },
        accent: { DEFAULT: "#FF6347", muted: "#CC4F38", pale: "rgba(255,99,71,0.08)" },
        stroke: { DEFAULT: "#262626", light: "#333333" },
        tcg: { DEFAULT: "#6C5CE7", bg: "#13112A" },
        a5tec: { DEFAULT: "#E17055", bg: "#1F1410" },
        ey: { DEFAULT: "#F2C94C", bg: "#1A180F" },
        adelphi: { DEFAULT: "#0984E3", bg: "#0C1520" },
        comwerks: { DEFAULT: "#00B894", bg: "#0C1A15" },
      },
      fontFamily: {
        display: ['"Syne"', "sans-serif"],
        body: ['"Manrope"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      animation: {
        morph: "morph 20s ease-in-out infinite",
        "spin-slow": "spin 30s linear infinite",
        "pulse-line": "pulseLine 2s ease-in-out infinite",
        "dot-bounce": "dotBounce 1.4s infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
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
        glowPulse: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
};
