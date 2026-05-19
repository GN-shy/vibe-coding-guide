import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "zeekr-blue": "#0A1628",
        "zeekr-cyan": "#00E5FF",
        "zeekr-card": "#1A2A44",
        "zeekr-text-secondary": "#8899AA",
        "zeekr-red": "#FF3B30",
      },
      fontFamily: {
        sans: [
          '"Noto Sans SC"',
          '"PingFang SC"',
          '"Microsoft YaHei"',
          "sans-serif",
        ],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite alternate",
        "float-down": "float-down 2s ease-in-out infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%": { boxShadow: "0 0 5px rgba(0, 229, 255, 0.3)" },
          "100%": { boxShadow: "0 0 20px rgba(0, 229, 255, 0.6)" },
        },
        "float-down": {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(8px)", opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
