import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/nightSky3d-Portfolio/",
  server: {
    mimeTypes: {
      js: 'application/javascript'
    }
  }
})
