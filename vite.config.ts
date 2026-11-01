import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Set base to '/' for custom domain or GitHub Pages with CNAME
  // Change to '/portfolio/' if deploying to https://ohmammad.github.io/portfolio/
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
