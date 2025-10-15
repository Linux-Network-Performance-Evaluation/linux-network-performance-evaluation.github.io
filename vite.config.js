import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        // Suppress deprecation warnings from third-party libraries like Bootstrap
        quietDeps: true,
        silenceDeprecations: [
          'import', 
          'global-builtin', 
          'color-functions',
          'slash-div'
        ]
      }
    }
  }
})
