import MillionLint from '@million/lint'
import { resolve } from 'path'
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), MillionLint.vite()],
  resolve: {
    alias: [
      { find: '@ui', replacement: resolve(__dirname, './src/components/ui') },
      {
        find: '@block',
        replacement: resolve(__dirname, './src/components/block'),
      },
      {
        find: '@pattern',
        replacement: resolve(__dirname, './src/components/pattern'),
      },
      { find: '@proto', replacement: resolve(__dirname, './src/proto') },
      {
        find: '@styles',
        replacement: resolve(__dirname, './src/styles'),
      },
      { find: '@context', replacement: resolve(__dirname, './src/context') },
      { find: '@enums', replacement: resolve(__dirname, './src/enums') },
      { find: '@hooks', replacement: resolve(__dirname, './src/hooks') },
      { find: '@i18n', replacement: resolve(__dirname, './src/i18n') },
      { find: '@layouts', replacement: resolve(__dirname, './src/layouts') },
      { find: '@utils', replacement: resolve(__dirname, './src/utils') },
      { find: '@pages', replacement: resolve(__dirname, './src/pages') },
      { find: '@sketch', replacement: resolve(__dirname, './src/sketch') },
      { find: '@router', replacement: resolve(__dirname, './src/router') },
    ],
  },
})
