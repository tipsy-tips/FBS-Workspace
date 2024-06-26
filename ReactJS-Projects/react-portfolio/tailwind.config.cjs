export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Regular: ["Robot-Regular", "sans-serif", "Helvetica"],
        SemiBold: ["Robot-Medium", "sans-serif", "Helvetica"],
        Bold: ["Robot-Bold", "sans-serif", "Helvetica"],
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
        "auto-fill": "repeat(auto-fit, minmax(300px, 1fr))",
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
