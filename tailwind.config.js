/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navybody : "#141B34",
      },

      content: {
        'highlight': 'url("/src/assets/highlight.svg")'
      }
    },
  },
  plugins: [],
};
