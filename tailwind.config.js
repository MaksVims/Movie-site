module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#06202A',
        secondary: '#00ED82',
      },
      screens: {
        xs: '480px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
