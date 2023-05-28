/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        'suraz':{
          dark:'#2B2B2B',
          darker:'#EDF7F1',
          light:'#F1FEFE',
          lighter:'#4F65D1'
        }
      }
    },
  },
  plugins: [],
}