import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['79d2-129-205-124-210.ngrok-free.app'],
    proxy: {
      '/api': {
        target: 'https://api.jsonbin.io/v3/b/67c7e315acd3cb34a8f53a7b/latest',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
