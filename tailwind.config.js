/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'hero-2x': "url('https://www.google.com/keep/img/hero-bg-2x.jpg')",
        'hero': "url('https://www.google.com/keep/img/hero-bg.jpg')",
        'mobile-hero': "url('https://www.google.co.in/keep/img/mobile/hero-bg-2x.jpg')",
        'market': "url('https://www.google.com/keep/img/when-and-where/market-bg.jpg')"
      },
      colors: {
        yellow1: '#d1b245',
        yellow2: '#ccb14f'
      }
    },
  },
  plugins: [],
}

