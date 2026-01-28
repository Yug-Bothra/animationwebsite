/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        coke: ["Playfair Display", "serif"],   // <-- Added font
      },
    },
  },
  plugins: [],
};
