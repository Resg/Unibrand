/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: "#0AAFDC", mute: "#7D7D7D" },
      fontFamily: {
        inter: ['Inter','system-ui','sans-serif'],
        mont: ['Montserrat','Inter','system-ui','sans-serif']
      }
    },
  },
  plugins: [],
};
