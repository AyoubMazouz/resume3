/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*/**/*.svelte"],
  theme: {
    extend: {
      fontFamily: {
        font: "'Lato', sans-serif",
      },
      colors: {
        dark: "#000",
        light: "#fff",
        accent: "#E62E62",
        primary: "#682EE6",
        secondary: "#C4C0E8",
      },
    },
  },
  plugins: [],
};
