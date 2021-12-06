const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        primary: '#06202A',
        secondary: '#00ED82',
      },
      boxShadow: {
        movieCard: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 3px 4px 7px -1px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
