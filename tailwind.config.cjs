/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-main": "#161616",
        bg: "#F6FEFF",
      },
      boxShadow: {
        custom: "8px 8px 0px rgba(255, 0, 0, 0.25)",
      },
    },
    fontFamily: {
      main: "Archivo",
    },
  },
  plugins: [],
};
