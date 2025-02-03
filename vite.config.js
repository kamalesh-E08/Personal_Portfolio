import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Root directory where index.html is located
  build: {
  outDir: 'build', // Output directory for the build
},
})
