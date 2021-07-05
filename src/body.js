module.exports = () => ({
  '.highlight': {
    '@apply rounded py-0.5 px-1': {},
  },
  body: {
    '@apply bg-gray-50': {},
  },
  main: {
    '@apply prose sm:prose-lg mx-auto px-4': {},
  },
  // TODO: fix
  'main pre': {
    // "@apply": "rounded-none -mx-bleed",
    'max-width': '100vw',
    // "@screen sm": {
    //   "@apply rounded-md": {}
    // }
  },
  'main mark': {
    '@apply bg-yellow-200 text-yellow-800 highlight': {},
  },
  'main a': {
    '@apply no-underline text-gray-500 font-semibold': {},
  },
  'main code': {
    '@apply text-pink-600 bg-gray-200 highlight': {},
  },
  'main kbd': {
    '@apply text-purple-900 bg-purple-100 highlight border border-b-2 border-purple-200': {},
    'font-size': '88%',
  },
  'main kbg svg': {
    'margin-bottom': '2px',
    height: '1em',
    width: '1em',
    display: 'inline',
  },
})
