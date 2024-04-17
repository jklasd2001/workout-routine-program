import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: ['@shadow-panda/preset'],
  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Files to exclude
  exclude: [],
  // Useful for theme customization
  theme: {
    extend: {},
  },
  jsxFramework: 'react',
  importMap: '@shadow-panda/styled-system',
  outdir: '@shadow-panda/styled-system',
})
