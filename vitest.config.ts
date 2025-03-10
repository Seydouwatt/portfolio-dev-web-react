import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom', // Utilise jsdom pour les tests React
    globals: true, // Permet d'utiliser `describe`, `it`, `expect` sans import
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
})
