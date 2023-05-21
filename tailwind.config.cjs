/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  variants: {},
  plugins: [],
}
