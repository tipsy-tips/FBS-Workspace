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
      fontSize: defaultThemeFontSizeInRems,
      screens: defaultThemeScreensInRems,
      backgroundImage: {
        hero: "url('/img/hero-pattern.svg')",
        services: "url(../dist/img/homepage/what-we-offer-bg.jpg)",
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
