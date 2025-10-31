import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/baxto-tattooist-portfolio/',
  preview: {
    allowedHosts: ['4173-i6dy4wqglp887zhr5gse3-2b0cbcd3.manusvm.computer'],
  },
})
