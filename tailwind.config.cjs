/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      common: {
        black: '#000000',
        white: '#ffffff',
        transparent: 'transparent',
      },
      background: {
        page: '#171717',
        field: '#3f3f46',
        highlight: '#115e59',
      },
      text: {
        primary: '#f5f5f5',
        secondary: '#a3a3a3',
        placeholder: '#d4d4d4',
      },
      theme: {
        primary: '#14b8a6',
        secondary: '#5eead4',
      },
    },
    fontSize: {
      '2xl': 32,
      xl: 24,
      lg: 20,
      md: 18,
      sm: 16,
      xs: 14,
    },

    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
};
