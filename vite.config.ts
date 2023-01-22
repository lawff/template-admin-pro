import { defineConfig, loadEnv } from 'vite'
import Unocss from 'unocss/vite'
import React from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') }

  return defineConfig({
    build: {
      outDir: 'build',
    },
    plugins: [

      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      Unocss(),

      React(),

      tsconfigPaths(),

      // https://github.com/antfu/vite-plugin-inspect
      // Visit http://localhost:7777/__inspect/ to see the inspector
      Inspect(),
    ],
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: process.env.PROXY_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''), // 将 /api 重写为空
        },
      },
    },
  })
}
