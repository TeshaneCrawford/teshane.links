// uno.config.ts
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
    ['linear-bg', 'bg-gradient-to-r'],
    ['bg-p-r', 'linear-bg from-yellow to-orange'],
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-flex border border-rounded items-center gap-16 bg-white/60 text-black/80 rounded-md py-4 px-3 cursor-pointer select-none transition duration-200 ease-in-out hover:opacity-100 hover:bg-gray-50/10 text-lg dark:text-white dark:bg-white/10 hover:dark:bg-white/5'],
  ],
  theme: {
    fontFamily: {
      sans: 'DM Sans',
    },
    colors: {
      // ...
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
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
