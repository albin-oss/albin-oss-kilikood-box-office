/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: '#FFD700',
          'yellow-dark': '#FFC107',
          'yellow-light': '#FFEB3B',
        },
        dark: {
          black: '#000000',
          'black-light': '#1a1a1a',
          'black-dark': '#0a0a0a',
        },
      },
    },
  },
  plugins: [],
}

