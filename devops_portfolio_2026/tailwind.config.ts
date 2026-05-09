/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#030303',
        primary: '#00d2ff',
        secondary: '#7000ff',
      },
    },
  },
  plugins: [],
}