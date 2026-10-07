import type { Config } from "tailwindcss";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0D0C0A",
        "ink-2": "#161412",
        "ink-3": "#211E1B",
        line: "#2E2A25",
        bone: "#EFEAE0",
        muted: "#8F877B",
        forge: "#FF4A2B",
        azul: "#4C86FF",
        win: "#C0C0C0",
      },
      letterSpacing: {
        tighter: "-0.025em",
      },
      fontFamily: {
        mono: ["Spline Sans Mono", "JetBrains Mono", "Courier New", "monospace"],
        display: ["Bricolage Grotesque", "Familjen Grotesk", "system-ui", "sans-serif"],
        sans: ["Familjen Grotesk", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        dash: {
          to: { strokeDashoffset: "-24" },
        },
        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(300%)" },
        },
        "ping-slow": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.6" },
          "94%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-rev": "marquee 38s linear infinite reverse",
        blink: "blink 1s steps(1) infinite",
        "spin-slow": "spin 22s linear infinite",
        dash: "dash 1.2s linear infinite",
        sweep: "sweep 3.2s ease-in-out infinite",
        "ping-slow": "ping-slow 2.4s cubic-bezier(0, 0, 0.2, 1) infinite",
        reveal: "reveal 0.35s ease-out both",
        flicker: "flicker 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
