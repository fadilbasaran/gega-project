/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,jsx}"],
  darkMode:'class',
  theme: {
    container: {
      center: true,
      screens:{
        lg:'1140px',
        xl:'1140px',
        '2xl':'1440px'
      }

    },
    extend: {
      fontFamily: {
        gemunu:["Gemunu Libre", "sans-serif"],
        "open-gega":["Open Sans", "sans-serif"]
      },
      colors: {
        'gega-red': '#BC1A45',
        'gega-melon': '#FFD369',
        'gega-grey': '#DDDDDD',
        'gega-white': '#F7F7F7',
      },
      spacing: {
        128:'32rem'
      },
      
    },
  },
  plugins: [],
}