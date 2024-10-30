// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  shortcuts: [
    // ... your existing shortcuts
    ['btn-base', 'relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-lg p-4 transition-all duration-400'],
    ['btn-backdrop', 'absolute bottom-0 right-0 bg-white/15 backdrop-blur transition-all duration-400'],
    ['btn-content', 'relative flex w-full items-center gap-4'],
  ],
  theme: {
    fontFamily: {
      sans: 'DM Sans',
    },
    colors: {
      // ... your existing colors
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
        // ... your existing fonts
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
