/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif', 'serif'],
      },
      colors: {
        primary: '#083e9e',
      },
    },
  },
  plugins: [require('daisyui')],
};
