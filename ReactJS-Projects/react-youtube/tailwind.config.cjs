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
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, minmax(100px, 5fr))",
        "auto-fit-100": "repeat(auto-fit, minmax(100px, 5fr))",
      },
      colors: {
        accent: "#c11119",
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
