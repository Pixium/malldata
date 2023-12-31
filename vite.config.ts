import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  root: './frontend',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./frontend/src', import.meta.url)),
    },
  },
});
