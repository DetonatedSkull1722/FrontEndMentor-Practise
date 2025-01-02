/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'mobile': "url('assets/images/background-mobile.png')",
        'desktop': "url('assets/images/background-desktop.png')",
        'tablet': "url('assets/images/background-tablet.png')",
      },
      fontFamily:{
        sans:['inconsolata', 'sans-serif']
      }
    },
  },
  plugins: [],
}