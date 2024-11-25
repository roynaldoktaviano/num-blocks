/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        spin: 'spin 6s infinite',
      }
    },
  },
  plugins: [],
}

