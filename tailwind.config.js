/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi', 'Inter', 'sans-serif'],
        'linear-grotesk': ['Linear Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        'pepproni-teal': '#2CBCC4',
        'pepproni-dark': '#2A2A2A',
        'pepproni-gray': '#4E4E4E',
        'pepproni-light-gray': '#858585',
        'pepproni-bg': '#FBFBFB',
      },
      spacing: {
        '15': '3.75rem', // 60px
      },
      animation: {
        'fade-cycle': 'fade-cycle 4s infinite',
      },
      keyframes: {
        'fade-cycle': {
          '0%, 25%': { opacity: '1' },
          '26%, 50%': { opacity: '0' },
          '51%, 75%': { opacity: '1' },
          '76%, 100%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}