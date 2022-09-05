/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },

    extend: {
      colors: {
        primary: '#14bBa6',
        dark: '#0f172a',
        secondary: '#64748b',
      },
      screens: {
        '2xl': '1290',
      },
    },
  },
  plugins: [],
}
