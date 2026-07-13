import { defineConfig } from 'vite';
import tailwindcss from "@tailwindcss/vite";
import preact from '@preact/preset-vite';
import netlify from "@netlify/vite-plugin";
import path from 'path'

export default defineConfig({
  plugins: [tailwindcss(), preact(), netlify()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@functions': path.resolve(__dirname, './netlify/functions'),
      '@core': path.resolve(__dirname, './src/core')
    }
  }
})