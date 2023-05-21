module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 5px 10px 1px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
