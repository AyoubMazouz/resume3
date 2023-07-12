/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*/**/*.svelte"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Montserrat', sans-serif",
      },
      colors: {
        dark: "#000",
        light: "#fff",
        accent: "#EA3467",
        primary: "#4D4DEB",
        secondary: "#C4C0E8",
      },
    },
  },
  safelist: ["text-red", "text-purple", "text-green", "text-blue"],
  plugins: [],
};
