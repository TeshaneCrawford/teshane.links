import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn-base', 'relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-lg p-4 transition-all duration-400'],
    ['btn-backdrop', 'absolute bottom-0 right-0 bg-white/15 backdrop-blur transition-all duration-400'],
    ['btn-content', 'relative flex w-full items-center gap-4'],
  ],
  rules: [
    ['rounded-custom', {
      'border-radius': '15px 225px 255px 15px 15px 255px 225px 15px',
      'border-bottom-left-radius': '15px 255px',
      'border-bottom-right-radius': '225px 15px',
      'border-top-left-radius': '255px 15px',
      'border-top-right-radius': '15px 225px',
    }],
  ],
  theme: {
    fontFamily: {
      sans: 'DM Sans',
    },
    colors: {
    },
    transitionDuration: {
      235: '235ms',
    },
    borderRadius: {
      custom: '15px 225px 255px 15px 15px 255px 225px 15px',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [

    'shadow-[rgba(0,0,0,0.2)_15px_28px_25px_-18px]',
    'hover:shadow-[rgba(0,0,0,0.3)_2px_8px_8px_-5px]',
    'focus:shadow-[rgba(0,0,0,0.3)_2px_8px_4px_-6px]',

    'duration-235',
    'ease-in-out',

    'hover:translate-y-0.5',

    'dark:bg-dark-800',
    'dark:border-gray-200',
    'dark:text-gray-200',
    'dark:hover:bg-white/10',

    'group-hover:scale-110',

    'w-full',
    'p-3',
    'border-1',
    'border-solid',
    'border-gray-800',
    'select-none',
    'cursor-pointer',
  ],
})
