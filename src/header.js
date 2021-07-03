module.exports = () => ({
  header: {
    '@apply bg-white text-center py-8 mb-8 border-gray-200 border-b': {},
  },
  'header > *:first-child': {},
  'header h1': {
    '@apply font-extrabold tracking-tight m-0': {},
  },
  'header img': {
    '@apply max-h-60 object-cover w-full -mb-12': {},
  },
})
