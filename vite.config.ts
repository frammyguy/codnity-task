import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// замените <твой-логин> и <repo-name>
export default defineConfig({
  plugins: [react()],
  base: '/codnity-task/', 
})
