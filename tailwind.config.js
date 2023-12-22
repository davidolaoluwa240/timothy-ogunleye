// Modules
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: "#ffffff",
          100: "#f9f9f9",
          200: "#F6EDED",
        },
        black: {
          DEFAULT: "#000000",
          100: "#2D2D35",
          200: "#8A8A8A",
          300: "#3e3e3e",
        },
      },
      fontFamily: {
        crimson: ["Crimson Pro", "serif"],
      },
    },
  },
  plugins: [
    nextui({
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#2D2D35",
            },
          },
        },
      },
    }),
  ],
};
