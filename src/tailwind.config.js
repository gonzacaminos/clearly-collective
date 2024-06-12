/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require("path");

module.exports = {
  theme: {
    extend: {
      screens: {
        mobile: "480px",
        wide: "2150px",
        "xl-wide": "2500px",
      },
      maxWidth: {
        xxl: "1440px",
        desk: "1646px",
        "wide-desk": "1766px",
        wide: "2150px",
        "xl-wide": "2500px",
      },
      backgroundImage: {
        footer: "linear-gradient(94.61deg, #0BC6E3 20.96%, #8600C5 86.91%)",
      },
      colors: {
        Primary: {
          200: "#B4B4AA",
          400: "#686855",
          500: "#43432A",
          600: "#353521",
          700: "#1D1D00",
        },
        Secondary: {
          50: "#FBF9F6",
          100: "#F9F5F0",
          200: "#F4EDE4",
          300: "#EFE5D9",
          400: "#EADDCD",
          500: "#E6D6C2",
          800: "#D8BE9F",
          1000: "#CEAF87",
          550: "#E3D2BC",
        },
        Neutral: {
          100: "#1A1A1A",
          200: "#333333",
          300: "#444444",
          400: "#8B8B8B",
          500: "#E4E4E4",
        },
      },
      fontFamily: {
        heading: "var(--font-heading-family)",
        body: "var(--font-body-family)",
      },
      spacing: {
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "100vh": "100vh",
      },
    },
    container: {
      center: true,
      margin: "4rem",
    },
  },
  plugins: [],
  content: [
    path.resolve(__dirname, "**/*.{js,vue}"),
    path.resolve(__dirname, "../shopify/**/*.liquid"),
    path.resolve(__dirname, "../pages/*.html"),
  ],
};
