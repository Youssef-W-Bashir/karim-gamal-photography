/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          card: "var(--bg-card)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
        },
        border: "var(--border)",
      },

      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        full: "var(--radius-full)",
      },

      fontFamily: {
        firaSans: ["Fira Sans", "sans-serif"],
        notoSerif: ["Noto Serif", "serif"],
        prata: ["Prata", "serif"],
        permanentMarker: ["Permanent Marker", "cursive"],
        playwriteNO: ["Playwrite NO", "cursive"]
      },

      backdropBlur: {
        md: "var(--blur)",
      },

      dropShadow: {
        glow: "0 0 10px var(--accent)",
        "glow-lg": "0 0 20px var(--accent)"
      },
      keyframes: {
        goldPulse: {
          "0%, 100%": {
            textShadow: "0 0 6px #c9a227, 0 0 12px #c9a22733",
            opacity: "0.9",
          },
          "50%": {
            textShadow: "0 0 12px #c9a227, 0 0 25px #c9a22766",
            opacity: "1",
          },
        },
      },
      animation: {
        "gold-pulse": "goldPulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

