/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", " ./src/js/theme.js "],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cBlur: '#e0e0e2',
      },
      fontFamily: {
        bakh: ["Bakh","sans-serif"],
      },
      container: {
        center: true,
      },
      screens: {
        'sx': ' 333px ',
        'sv': '360px',
        'bb': '400px',
        'ww': ' 470px ',
        'mm': '500px',
        'ss': ' 555px ',
        'rr': '650px',
        'zz': '700px',
        'jj': '767px ',
        'xxl': '1281px',
        '3xl': '1850px',
        '4xl': '1921px',
      },
      lineHeight: {
        'extra-loose': '6.5',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
  ],
}