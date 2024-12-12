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

import * as colors from '@radix-ui/colors'

type RadixColorScale = { [key: string]: string }
type RadixColors = { [key: string]: RadixColorScale }

// Helper to convert camelCase to kebab-case
const toKebabCase = (str: string) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

// Generate color variables for both light and dark modes
const generateThemeVariables = () => {
  const lightTheme: Record<string, string> = {}
  const darkTheme: Record<string, string> = {}
  const radixColors = colors as RadixColors

  for (const [key, value] of Object.entries(radixColors)) {
    // Skip dark themes as we'll process them with their light counterparts
    if (key.endsWith('Dark')) continue

    const baseKey = toKebabCase(key)
    const darkKey = `${key}Dark`

    // Process light theme values
    Object.entries(value).forEach(([step, color]) => {
      const colorKey = `--${baseKey}-${step.replace(/[^0-9]/g, '')}`
      lightTheme[colorKey] = color
    })

    // Process dark theme values if they exist
    if (darkKey in radixColors) {
      const darkScale = radixColors[darkKey] as RadixColorScale
      Object.entries(darkScale).forEach(([step, color]) => {
        const colorKey = `--${baseKey}-${step.replace(/[^0-9]/g, '')}`
        darkTheme[colorKey] = color
      })
    }
  }

  return { lightTheme, darkTheme }
}

const { lightTheme, darkTheme } = generateThemeVariables()

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
      sans: 'Architects Daughter',
    },
    colors: Object.fromEntries(
      Object.entries(colors as RadixColors)
        .filter(([name]) => !name.endsWith('Dark'))
        .map(([name]) => [
          toKebabCase(name),
          Object.fromEntries(
            Array.from({ length: 12 }, (_, i) => [
              i + 1,
              `var(--${toKebabCase(name)}-${i + 1})`,
            ]),
          ),
        ]),
    ),
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
  preflights: [
    {
      getCSS: () => `
        :root {
          ${Object.entries(lightTheme)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n          ')}
        }

        .dark {
          ${Object.entries(darkTheme)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n          ')}
        }
      `,
    },
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [
    // Color variations for common utilities
    ...Array.from({ length: 12 }, (_, i) => [
      `text-red-${i + 1}`,
      `text-blue-${i + 1}`,
      `text-green-${i + 1}`,
      `border-red-${i + 1}`,
      `border-blue-${i + 1}`,
      `border-green-${i + 1}`,
      `bg-red-${i + 1}`,
      `bg-blue-${i + 1}`,
      `bg-green-${i + 1}`,
    ]).flat(),
    // Border utilities
    'border',
    'border-2',
    'rounded',
    // Spacing utilities
    'p-2',

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
