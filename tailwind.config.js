module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#06202A',
      secondary: '#00ED82',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
