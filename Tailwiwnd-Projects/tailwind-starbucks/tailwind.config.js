module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        starBanner: "url(../dist/img/rewards/xl-hero-desktop_2021.png)",
        starBannerM: "url(../dist/img/rewards/hero-mobile_2021.webp)",
      },
      colors: {
        dark: "#2b2b2b",
        light: "#ffffff",
        primary: "#006241",
        secondary: "#d0eae4",
      },
    },
  },
  plugins: [],
};
