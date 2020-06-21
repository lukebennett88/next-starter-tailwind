const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    cursor: ['responsive', 'disabled'],
    margin: ['responsive', 'first'],
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: [tailwindUI],
};
