/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      tablet: "640px",

      laptop: "1024px",

      desktop: "1280px",

      tv: "1920px",
    },
    extend: {
      colors: {
        primary: {
          light: "#f8fafc",
          dark: "#2d3748",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "1rem",
          xl: "1rem",
          "2xl": "1rem",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
