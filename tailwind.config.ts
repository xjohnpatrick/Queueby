import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        poppins: ["var(--font-poppins)"],
        montserrat: ['var(--font-montserrat)']
      },
      colors: {
        blue: {
          DEFAULT: "#69b7e5",
          100: "#3BACF1",
          200: "#0358B6",
          300: "#2669D6",
          400: "#132540",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        gray: {
          DEFAULT: "#dedde5",
          50: "#4b4a52",
          100: "#928C8C",
        },
        red: {
          DEFAULT: "#fedcdb",
          100: "#a14948",
        },
        green: {
          DEFAULT: "#deecdf",
          100: "#3a753d",
        },
        yellow: {
          DEFAULT: "#f6deae",
          100: "#9f7f32",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
