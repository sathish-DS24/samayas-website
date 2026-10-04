import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const deferCssPlugin = () => ({
  name: 'defer-css',
  transformIndexHtml(html) {
    return html.replace(
      /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/g,
      '<link rel="preload" as="style" crossorigin href="$1" onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" crossorigin href="$1"></noscript>'
    )
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), deferCssPlugin()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('/react/') ||
              id.includes('\\react\\') ||
              id.includes('/react-dom/') ||
              id.includes('\\react-dom\\') ||
              id.includes('/react-router-dom/') ||
              id.includes('\\react-router-dom\\') ||
              id.includes('/react-router/') ||
              id.includes('\\react-router\\') ||
              id.includes('/scheduler/') ||
              id.includes('\\scheduler\\')
            ) {
              return 'vendor-react'
            }
            if (id.includes('@googlemaps')) {
              return 'vendor-maps'
            }
            if (id.includes('framer-motion') || id.includes('lucide-react')) {
              return 'vendor-ui'
            }
            if (id.includes('@emailjs')) {
              return 'vendor-email'
            }
            if (id.includes('@supabase')) {
              return 'vendor-backend'
            }
          }
        }
      }
    }
  }
})

