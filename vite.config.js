import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-parallax-tilt'], // বা 'react-tilt' যদি সেটি ব্যবহার করেন
  },
})
