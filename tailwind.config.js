/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        'dark-gold': '#B8860B',
        'light-gold': '#FFF8DC',
      },
    },
  },
  plugins: [],
}