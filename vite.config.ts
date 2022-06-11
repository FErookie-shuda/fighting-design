import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { resolve } from 'path'
import dts from 'vite-plugin-dts' // https://github.com/qmhc/vite-plugin-dts

export default defineConfig({
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  plugins: [
    vueSetupExtend(),
    vue(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
      cleanVueFileName: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/fighting-components/index.ts'),
      name: 'fightingDesign',
      formats: ['es', 'umd'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
