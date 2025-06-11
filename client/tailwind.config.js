/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'white-glow': '0 10px 30px rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
}