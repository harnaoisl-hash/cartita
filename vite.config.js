import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚙️ IMPORTANTE: cambia el base con el nombre de tu repo
export default defineConfig({
  base: '/cartita/',
  plugins: [react()],
})
