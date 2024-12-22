/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Mergrim: 'Megrim, serif',
        Firasans: 'Fira Sans, serif'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

