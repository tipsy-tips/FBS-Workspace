/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(../dist/img/banner-img.png)",
        project1: "url(../dist/img/projects1.png)",
        project2: "url(../dist/img/projects2.png)",
        project3: "url(../dist/img/projects3.png)",
      },
      colors: {
        dark: "#2b2b2b",
        light: "#ffffff",
        primary: "#2b2b2b",
        secondary: "#fa4c37",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [],
};
