/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/*.html",
    "./_layouts/*.html",
    "./projects/**/*.html",
    "./toolbox/**/*.html",
    "./writing/**/*.html",
    "./*.html",
  ],
  theme: {
    fontFamily: {
      sans: ['urw-regular', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}