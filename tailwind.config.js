/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
  extend: {
    fontFamily: {
      titleFont: ["Poppins", "sans-serif"],
      bodyFont: ["Montserrat", "sans-serif"],
    },
    colors: {
      bodyColor: "#212428",
      lightText: "#c4cfde",
      boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
      designColor: "#ff014f",
    },
    borderColor: {
      black: "#000000",
    },
    boxShadow: {
      shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
    },
    textTransform: {
    capitalize: "capitalize"
    },

    
  },
};
export const plugins = [];