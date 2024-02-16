import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  plugins: [vue(), visualizer({ open: true, filename: 'dist/stats.html' })],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
