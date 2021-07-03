module.exports = () => ({
  label: {
    '@apply text-sm leading-5 font-medium text-gray-700': {},
  },
  input: {
    '@apply w-full': {},
    '@apply focus:shadow-outline-indigo focus:border-indigo-500': {},
  },
  textarea: {
    '@apply w-full': {},
    '@apply focus:shadow-outline-indigo focus:border-indigo-500': {},
  },
  select: {
    '@apply w-full': {},
    '@apply focus:shadow-outline-indigo focus:border-indigo-500': {},
  },
  'select[multiple]': {
    '@apply w-full': {},
    '@apply focus:shadow-outline-indigo focus:border-indigo-500': {},
  },
  'input[type="checkbox"]': {
    '@apply text-indigo-500': {},
    '@apply focus:shadow-outline-indigo focus:border-indigo-500': {},
  },
  'input[type="radio"]': {
    '@apply text-indigo-500': {},
    '@apply focus:shadow-outline-indigo focus:border-indigo-500': {},
  },
  button: {
    '@apply py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out':
      {},
  },
  'input[type="button"]': {
    '@apply py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out':
      {},
  },
  'button[disabled]': {
    '@apply hover:bg-indigo-600 opacity-50': {},
  },
})
