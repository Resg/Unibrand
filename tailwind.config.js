/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: { sans: ['Roboto', 'system-ui', 'sans-serif'] },
    extend: {
      colors: {
        brandDark: '#1e293b',
        brandLightText: '#e2e8f0',
        brand: '#0AAFDC',
        mute: '#7D7D7D',
      },
    },
  },
  plugins: [],
}
