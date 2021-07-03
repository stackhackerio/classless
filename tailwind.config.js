module.exports = {
  purge: ['index.html', './demo/**/*.{js}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('./index')],
}
