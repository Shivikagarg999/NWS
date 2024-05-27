/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu-light': ["'Ubuntu'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
