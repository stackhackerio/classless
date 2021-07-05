module.exports = () => ({
  label: {
    '@apply text-sm leading-5 font-medium text-gray-700': {},
  },
  input: {
    '@apply w-full': {},
    '@apply focus:shadow-outline-gray focus:border-gray-500': {},
  },
  textarea: {
    '@apply w-full': {},
    '@apply focus:shadow-outline-gray focus:border-gray-500': {},
  },
  select: {
    '@apply w-full': {},
    '@apply focus:shadow-outline-gray focus:border-gray-500': {},
  },
  'select[multiple]': {
    '@apply w-full': {},
    '@apply focus:shadow-outline-gray focus:border-gray-500': {},
  },
  'input[type="checkbox"]': {
    '@apply text-gray-500': {},
    '@apply focus:shadow-outline-gray focus:border-gray-500': {},
  },
  'input[type="radio"]': {
    '@apply text-gray-500': {},
    '@apply focus:shadow-outline-gray focus:border-gray-500': {},
  },
  button: {
    '@apply py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out':
      {},
  },
  'input[type="button"]': {
    '@apply py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out':
      {},
  },
  'button[disabled]': {
    '@apply hover:bg-gray-600 opacity-50': {},
  },
})
