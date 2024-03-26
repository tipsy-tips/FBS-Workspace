/** @type {import('tailwindcss').Config} */
import {
  fluidExtractor,
  fluidCorePlugins,
  defaultThemeScreensInRems,
  defaultThemeFontSizeInRems,
} from "fluid-tailwind";

module.exports = {
  content: {
    files: ["./dist/**/*.{html,js}"],
    extract: fluidExtractor(),
  },
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": { "background-position": "25% 0%" },
          "100%": { "background-position": "40% 80%" },
        },
      },
      animation: {
        gradient: "gradient 15s ease forwards;",
      },
      fontSize: defaultThemeFontSizeInRems,
      screens: defaultThemeScreensInRems,
      backgroundImage: {
        services: "url('../dist/img/homepage/what-we-offer-bg.jpg')",
        animated: "url('../dist/img/about-us-540.svg')",
        radialGradient:
          "radial-gradient(circle farthest-side at center bottom,#e81a86,#6a103f 125%);",
      },
      content: {
        quoteLeft: 'url("../dist/img/homepage/quote-left.svg")',
        quoteRight: 'url("../dist/img/homepage/quote-right.svg")',
      },
      colors: {
        dark: "#2b2b2b",
        light: "#ffffff",
        primary: "#6a103f",
        accent: "#f5f5f5",
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        circle: "circle",
        roman: "upper-roman",
      },
    },
  },
  plugins: [fluidCorePlugins],
};
