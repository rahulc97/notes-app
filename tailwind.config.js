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
        'hero': "url('https://www.google.com/keep/img/hero-bg-2x.jpg')",
        'collaboration': "url('https://evernote.com/_next/image?url=%2Fimages%2Fsplit%2Fteamwork.webp&w=640&q=75')"
      },
      colors: {
        yellow1: '#d1b245',
        yellow2: '#ccb14f'
      }
    },
  },
  plugins: [],
}

