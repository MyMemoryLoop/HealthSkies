import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'script',
      includeAssets: ['healthyskies-uae-logo.png', 'favicon.svg'],
      manifest: {
        name: 'One Healthcare',
        short_name: 'OneHealth',
        description: 'Your unified healthcare experience',
        start_url: '/',
        display: 'standalone',
        background_color: '#FFFFFF',
        theme_color: '#4169E1',
        icons: [
          { src: '/favicon.svg', sizes: '192x192', type: 'image/svg+xml' },
          { src: '/favicon.svg', sizes: '512x512', type: 'image/svg+xml' }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/(tfhub\.dev|storage\.googleapis\.com)\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'tfjs-models-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200] // Allow opaque responses
              }
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
