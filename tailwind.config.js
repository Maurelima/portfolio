/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      // widest: '.1em',
      widest: '.2em',
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'portfolioGrey': {
          100: '#D9D9D9',
          200: '#9E9E9E',
          300: '#757575',
          400: '#575757',
          900: '#121212',
        },
        'portfolioGreen': {
          100: '#3E8989',
        },
      },
      backgroundImage: {
        'me': "url('/me.jpg')",
      },
    },
  },
  plugins: [],
}
