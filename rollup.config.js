import serve from 'rollup-plugin-serve'
import del from 'rollup-plugin-delete'
import css from 'rollup-plugin-import-css'
import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'
import { main, module, jsdelivr } from './package.json'
const production = !process.env.ROLLUP_WATCH
const input = 'src/main.js'
const name = 'cardLink'

const plugins = [
  !production && serve({ port: 6870, host: '127.0.0.1', contentBase: ['dist', 'public'] }),
  production && del({ targets: 'dist/*' }),
  babel({ babelHelpers: 'bundled', presets: ['@babel/preset-env'] }),
  css({ minify: true })
]

export default [
  {
    input,
    plugins,
    output: [
      {
        sourcemap: true,
        format: 'iife',
        name,
        file: jsdelivr,
        plugins: [production && terser()]
      },
      {
        format: 'esm',
        name,
        file: module
      },
      {
        exports: 'auto',
        format: 'cjs',
        name,
        file: main
      }
    ],
    watch: {
      clearScreen: false
    }
  }
]
