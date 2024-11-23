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
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#4379F2",
        green: "#28a745",
        red: "#dc3545",
        dark: "#020002",
        whiteblur: "rgba(250, 250,250, .3)",
        purple: "rgba(100, 100, 200)",
        purple2: "#4C3BCF",
        whiteTransparant: "rgba(255,255,255,.3)",
        blackTransparant: "rgba(0,0,0,.5)",
      },
      borderWidth: {
        "1": "1px",
        "2": "2px",
        "4": "4px",
        "5": "5px",
      },
      borderColor: {
        white: "white",
        purple: "rgba(100, 100, 200)",
        purple2: "#4C3BCF",
        blue: "#4379F2",
      },
      maxWidth: {
        ultrawide: "1700px",
      },
      borderRadius: {
        nav: "0px 0px 0px 9999px",
      },
    },
  },
  // plugins: [require("daisyui")],
};
export default config;
