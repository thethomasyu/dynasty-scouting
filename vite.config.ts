import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps every asset reference relative, so the built site works at
// any URL depth: GitHub Pages project sites, custom domains, or local preview.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2020',
    assetsInlineLimit: 2048,
  },
})
