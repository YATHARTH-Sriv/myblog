import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //   proxy:{
  //     '/api':"https://d1bfm8yca6vpwt.cloudfront.net"
  //   }
  // },
  plugins: [react()],
})


