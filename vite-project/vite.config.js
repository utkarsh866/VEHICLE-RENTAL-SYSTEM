import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:5000", // Use http if your backend server does not support https
        secure: false,
        changeOrigin: true, // This helps avoid potential issues with CORS and SSL
      },
    },
  },
  plugins: [react()],
})
