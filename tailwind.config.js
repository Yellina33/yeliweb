/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          start: '#621F7F',
          end: '#C73D47',
        },
        secondary: '#FFC821',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #621F7F 0%, #C73D47 100%)',
      },
    },
  },
  plugins: [],
};