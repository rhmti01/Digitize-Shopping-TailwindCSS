/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html" , " ./src/js/theme.js " ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["yekanbakh"],
      },
      container: {
        center: true,
      },
      screens: {
        'sx': ' 333px ',
        'sv': '360px',
        'bb':'400px',
        'ww':' 470px ',
        'mm': '500px',
        'ss': ' 555px ',
        'rr':'650px',
        'zz': '700px',
        'jj' : '767px ',
        'xxl':'1281px',
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