/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        dark: "#2b2b2b",
        light: "#ffffff",
        primary: "#008542",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [],
};
