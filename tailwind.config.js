/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode:'class',
    extend: {
      backgroundImage:{
        'page-bg':"url('./public/bg.png')"
      },
      fontFamily:{
        poppins:['"Fira Code"','monospace'],
        sans: ['Inter', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [require('tailwindcss-filters'),],
}

