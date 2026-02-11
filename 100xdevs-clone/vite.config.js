import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: "#0B1C3F",
        accent: "#14B8A6"
      }
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
