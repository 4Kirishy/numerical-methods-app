/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-main": "#161616",
        bg: "#F6FEFF",
      },
    },
    fontFamily: {
      main: "Archivo",
    },
  },
  plugins: [],
};
