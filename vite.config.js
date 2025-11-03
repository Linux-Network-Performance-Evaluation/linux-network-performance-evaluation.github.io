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
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunk for React and related libraries
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') || 
              id.includes('node_modules/react-router-dom')) {
            return 'vendor';
          }
          
          // Bootstrap chunk
          if (id.includes('node_modules/react-bootstrap') || 
              id.includes('node_modules/bootstrap')) {
            return 'bootstrap';
          }
          
          // Document processing libraries (loaded lazily)
          if (id.includes('node_modules/mammoth') || 
              id.includes('node_modules/xlsx')) {
            return 'docprocessing';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
