/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*/**/*.svelte"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Montserrat', sans-serif",
      },
      colors: {
        red: "#FE0000",
        orange: "#FF530D",
        purple: "#FF0DFF",
        blue: "#19FFDC",
        dark: "#000",
        light: "#fff",
        secondary: "#BCB8CE",
      },
    },
  },
  safelist: ["text-red", "text-purple", "text-green", "text-blue"],
  plugins: [],
};
