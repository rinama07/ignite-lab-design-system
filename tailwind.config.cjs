/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      common: {
        black: '#000000',
        white: '#ffffff',
        transparent: 'transparent',
      },
      zinc: {
        500: '#71717A',
        700: '#3F3F46',
      },
      neutral: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        900: '#171717',
      },
      indigo: {
        300: '#A5B4FC',
        500: '#6366F1',
        600: '#4F46E5',
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
      }
    },
  },
  plugins: [],
}
