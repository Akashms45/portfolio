/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#6D28D9", // violet-700
        primaryDark: "#FBBF24", // yellow-400
        textLight: "#D1D5DB",
        textDark: "#374151",
      },
    },
  },
  plugins: [],
};
