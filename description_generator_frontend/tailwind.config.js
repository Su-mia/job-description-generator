/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      },
      colors:{
        'Primary':'#04346E',
        'Primary-100':'#E1EEFE',
        'Secondary': '#058BCA',
        'Secondary-500': '#33BAFA',
        'Neutrals-800': '#808080',
       
      }
    },
  },
  plugins: [],
}