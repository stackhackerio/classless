const plugin = require('tailwindcss/plugin')

const config = require('./src/config')
const body = require('./src/body')
const header = require('./src/header')
const forms = require('./src/forms')
const definitionList = require('./src/definitionList')
const foreignContent = require('./src/foreignContent')
const details = require('./src/details')
const footer = require('./src/footer')

module.exports = plugin(
  function ({ addComponents }) {
    addComponents([
      config(),
      body(),
      header(),
      forms(),
      definitionList(),
      foreignContent(),
      details(),
      footer(),
    ])
  },
  {
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
      defaultLineHeights: true,
      standardFontWeights: true,
    },
    experimental: {
      applyComplexClasses: true,
      uniformColorPalette: true,
      extendedSpacingScale: true,
      extendedFontSizeScale: true,
    },
    corePlugins: {
      float: false,
      boxSizing: false,
      clear: false,
      overscrollBehavior: false,
      gridTemplateColumns: false,
      gridColumn: false,
      gridColumnStart: false,
      gridColumnEnd: false,
      gridTemplateRows: false,
      gridRow: false,
      gridRowStart: false,
      gridRowEnd: false,
      gridAutoFlow: false,
      gridAutoColumns: false,
      gridAutoRows: false,
      gap: false,
      placeContent: false,
      placeItems: false,
      placeSelf: false,
      animation: false,
      gradientColorStops: false,
    },
    theme: {
      extend: {
        boxShadow: (theme) => ({
          'outline-gray': `0 0 0 3px ${theme('colors.gray.500')}80`,
        }),
        margin: {
          '-bleed': `calc(var(--bleed) * -1)`,
        },
        padding: {
          bleed: `var(--bleed)`,
        },
        height: {
          130: `32.5rem`,
        },
        inset: {
          bleed: `var(--bleed)`,
        },
      },
      customForms: (theme) => ({
        default: {
          select: {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 22 22" fill="${theme(
              'colors.gray.500'
            )}"><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>`,
          },
        },
      }),
    },
    variants: {
      backgroundColor: ({ after }) => after(['active']),
    },
  }
)
