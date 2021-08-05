const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      "catalina-blue": {
        DEFAULT: "#09347A",
        50: "#74A5F5",
        100: "#5C95F3",
        200: "#2D77EF",
        300: "#105CD9",
        400: "#0D48A9",
        500: "#09347A",
        600: "#05204B",
        700: "#020C1B",
        800: "#000000",
        900: "#000000",
      },
      white: {
        DEFAULT: "#FFFFFF",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#FFFFFF",
        500: "#FFFFFF",
        600: "#E6E6E6",
        700: "#CCCCCC",
        800: "#B3B3B3",
        900: "#999999",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
