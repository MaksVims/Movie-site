const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xsss: '360px',
      xss: '410px',
      xs: '480px',
      ...defaultTheme.screens,
    },
    colors: {
      ...defaultTheme.colors,
      primary: {
        dark: '#06202A',
        DEFAULT: '#147e4e',
        light: '#00ED82',
      },
    },
    extend: {
      boxShadow: {
        movieCard: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 3px 4px 7px -1px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        auth: "url('/images/auth_bg.jpg')",
        profile: "url('/images/profile_bg.jpg')",
      },
      gridTemplateColumns: {
        info: '150px 1fr',
      },
    },
    variants: {
      extend: {},
    },
  },
}
