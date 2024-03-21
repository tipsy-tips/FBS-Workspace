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
      backgroundImage: {},
      colors: {
        dark: "#2b2b2b",
        light: "#ffffff",
        primary: "#008542",
        accent: "#28941e",
      },
    },
  },
  plugins: [fluidCorePlugins],
};
