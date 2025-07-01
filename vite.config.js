import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'styled-components', 'react-icons/fa']
  },
  server: {
    port: 3000,
    open: true
  }
})