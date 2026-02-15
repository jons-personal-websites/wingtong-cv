tailwind.config = {
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#FAF9F7", surface: "#F2F1EE", elevated: "#FFFFFF", hover: "#EEEDEA" },
        text: { DEFAULT: "#1A1A1A", dim: "#5A5A5A", faint: "#999999" },
        accent: { DEFAULT: "#0073CE", muted: "#005FA8", pale: "rgba(0,115,206,0.06)" },
        gold: { DEFAULT: "#FFD93D", muted: "#E6C235" },
        stroke: { DEFAULT: "#E5E4E1", light: "#ECECEC" },
        tcg: { DEFAULT: "#6C5CE7", bg: "#F5F3FF" },
        a5tec: { DEFAULT: "#E17055", bg: "#FFF5F2" },
        ey: { DEFAULT: "#D4A017", bg: "#FFFBEB" },
        adelphi: { DEFAULT: "#0984E3", bg: "#EFF8FF" },
        comwerks: { DEFAULT: "#00B894", bg: "#ECFDF5" },
      },
      fontFamily: {
        display: ['"DM Sans"', "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
        body: ['"DM Sans"', "sans-serif"],
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
