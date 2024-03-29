/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        // default breakpoints but with 40px removed
        screens: {
          'sm': '600px',
          'md': '728px',
          'lg': '984px',
          'xl': '1240px',
          '2xl': '1496px',
        },
      },
      colors: {
        'grey': '#666680',
        'pink': '#fdf2fb',
        'lightPink': '#EAECF0',
        'lightBlue': '#524FD5',
        'lightBlueTow': '#7077E4',
        'lightGrey': '#B0B0C0',
        'greyBorder': '#CCD7F9',
        'darkGrey': '#667085',
      },
      fontFamily: {
        'playfair': ['Playfair Display'],
        'kalam': ['Kalam'],
      },
      screens: {
        '2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }

        'lg': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'xmd': { 'max': '979px' },
        // => @media (max-width: 979px) { ... }

        'md': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'sm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }

        'xsm': { 'max': '419px' },
        // => @media (max-width: 639px) { ... }
      },

    },
  },
  plugins: [],
}

