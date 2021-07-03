module.exports = () => ({
  footer: {
    '@apply bg-gray-100 text-center py-12 space-y-8 text-base text-gray-500 mt-8': {},
  },
  'footer ul': {
    '@apply m-0 p-0': {},
  },
  'footer ul li': {
    '@apply m-0 p-0': {},
  },
  'footer ul li &:before': {
    '@apply hidden': {},
  },
  'footer & > *': {
    '@apply flex items-center justify-center space-x-8': {},
  },
  'footer & a': {
    '@apply text-gray-500 font-medium': {},
  },
  'footer & svg': {
    width: '24px',
    height: '24px',
  },
})
