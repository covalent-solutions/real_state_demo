/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          light: '#D8D2EC', // Custom color with a name
        },
      },
    },
  },
  plugins: [],
};
