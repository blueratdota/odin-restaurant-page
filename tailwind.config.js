/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbit: ['Pacifico'],
        jersey: ["'Jersey 25'", 'Pacifico']
      }
    },
  },
  plugins: [],
}

