/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      gray2: "#212121",
      main: "#05FF9A",
    },
    fontSize: {
      smm: "0.01rem",
      sm: "0.8rem",
      base: "1rem",
      s: "1rem",
      m: "1.5rem",
      x: "2rem",
      xl: "2.5rem",
      xl2: "2rem",
      xl3: "4rem",
    },
  },

  plugins: [require("flowbite/plugin")],
};
