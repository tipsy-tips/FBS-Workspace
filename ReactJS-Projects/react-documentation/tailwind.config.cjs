export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        phone: "320px",
        // => @media (min-width: 320px) { ... }

        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: ".5rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Regular: ["GT-Regular", "sans-serif", "Helvetica"],
        SemiBold: ["GT-Medium", "sans-serif", "Helvetica"],
        Bold: ["GT-Bold", "sans-serif", "Helvetica"],
        Black: ["GT-Black", "sans-serif", "Helvetica"],
      },
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        cancel: "rgb(var(--cancel) / <alpha-value>)",
        alert: "rgb(var(--alert) / <alpha-value>)",
        content: "rgb(var(--content) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        info: "rgb(var(--info) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",

        /*UI CSS*/
        uiPrimary: "rgb(var(--uiPrimary) / <alpha-value>)",
        uiContent: "rgb(var(--uiPontent) / <alpha-value>)",
        cGreen: "rgb(var(--cGreen) / <alpha-value>)",
        cOrange: "rgb(var(--cOrange) / <alpha-value>)",
        cBlue: "rgb(var(--cBlue) / <alpha-value>)",
        cRed: "rgb(var(--cRed) / <alpha-value>)",
        uiLine: "rgb(var(--uiLine) / <alpha-value>)",
      },

      backgroundColor: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        content: "rgb(var(--content) / <alpha-value>)",
        cancel: "rgb(var(--cancel) / <alpha-value>)",
        alert: "rgb(var(--alert) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        info: "rgb(var(--info) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",

        /*UI CSS*/
        uiPrimary: "rgb(var(--uiPrimary) / <alpha-value>)",
        uiContent: "rgb(var(--uiContent) / <alpha-value>)",
        cGreen: "rgb(var(--cGreen) / <alpha-value>)",
        cOrange: "rgb(var(--cOrange) / <alpha-value>)",
        cBlue: "rgb(var(--cBlue) / <alpha-value>)",
        cRed: "rgb(var(--cRed) / <alpha-value>)",
        uiLine: "rgb(var(--uiLine) / <alpha-value>)",
      },

      fill: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        cancel: "rgb(var(--cancel) / <alpha-value>)",
        alert: "rgb(var(--alert) / <alpha-value>)",
        content: "var(--content)",
        line: "var(--line)",
        info: "var(--info)",
        warning: "var(--warning)",

        /*UI CSS*/
        uiPrimary: "rgb(var(--uiPrimary) / <alpha-value>)",
        uiContent: "rgb(var(--uiContent) / <alpha-value>)",
        cGreen: "rgb(var(--cGreen) / <alpha-value>)",
        cOrange: "rgb(var(--cOrange) / <alpha-value>)",
        cBlue: "rgb(var(--cBlue) / <alpha-value>)",
        cRed: "rgb(var(--cRed) / <alpha-value>)",
        uiLine: "rgb(var(--uiLine) / <alpha-value>)",
      },

      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fit, minmax(400px, 1fr))",
      },

      keyframes: {
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
        loading: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },

      animation: {
        rotate: "rotate 2s linear infinite",
        loading: "loading 1.5s ease-in infinite",
      },
    },
  },
  plugins: [],
};
