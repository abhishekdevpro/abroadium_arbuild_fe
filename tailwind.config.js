/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['"League Spartan"', "sans-serif"],
      },
      colors: {
        primary: '#0C448F',
        success: '#47B756',
        background: "#F4F8FF"
      },
    },
  },
  plugins: [],
};
