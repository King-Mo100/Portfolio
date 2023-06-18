/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
  extend: {
    fontFamily: {
      bodyFont: ["Poppins", "sans-serif"],
      titleFont: ["Montserrat", "sans-serif"],
    },
    colors: {
      bodyColor: "#212428",
      lightText: "#c4cfde",
      boxBg: "liner-gradient(145deg, #1e2024, #23272b",
      designColor: "#ff014f",
    },
    boxShadow: {
      shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
    },
  },
};
export const plugins = [];