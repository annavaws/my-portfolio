/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','.//**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily :{
        inter: ['inter', 'serif'],
      }
    },
  },
  plugins: [],
}

