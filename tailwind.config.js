module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        prblack: "rgb(20, 20, 20)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
