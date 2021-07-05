module.exports = () => ({
  'img, video, iframe': {
    '@apply -mx-bleed max-w-none shadow-lg rounded-none my-8': {},
    width: 'calc(var(--bleed) * 2 + 100%)',
    // TODO: fix
    // @screen sm {
    //  @apply rounded-md;
    // }
  },
  iframe: {
    '@apply h-130': {},
  },
  audio: {
    '@apply w-full my-8': {},
  },
  figure: {
    '@apply -mx-bleed text-center': {},
  },
  'figure img': {
    '@apply mx-0 w-full my-0': {},
  },
  'figure video': {
    '@apply mx-0 w-full my-0': {},
  },
  'figure iframe': {
    '@apply mx-0 w-full my-0': {},
  },
  'figure audio': {
    '@apply px-bleed': {},
  },
  'figure caption': {
    '@apply px-4': {},
    // TODO: fix
    // @screen sm {
    //  @apply px-8;
    // }
  },
})
