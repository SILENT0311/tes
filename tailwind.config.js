/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        'milk': '#ebeef1',
        'awan': '#dae2eb'
      },
    },
    fontFamily: {
      'poppins': ['Poppins', 'Arial', 'sans-serif']
    }
  },
  plugins: [],
}

