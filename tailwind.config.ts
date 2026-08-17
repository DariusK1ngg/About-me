import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#05070A",
        "obsidian-card": "#0B1017",
        "oracle-amber": "#FF8C00",
        "oracle-red": "#E53935",
        "cobalt-blue": "#0052FF",
        "cyber-cyan": "#00F0FF",
        "terminal-green": "#10B981",
        "steel-grey": "#475569",
        "steel-light": "#94A3B8",
        "steel-dark": "#1E293B",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Courier New", "monospace"],
      },
      animation: {
        "pulse-fast": "pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scanline": "scanline 8s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
