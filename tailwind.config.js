/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair : ["Playfair Display SC", "serif"],
        poppins : ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "desktop-home": "url('/src/assets/bgD.jpg')",
        "desktop-mobile": "url('/src/assets/bgM.jpg')",
      }
    },
  },
  plugins: [],
}