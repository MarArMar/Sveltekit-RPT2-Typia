import typescript from 'rollup-plugin-typescript2'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export const exclude_list = [
  '../../**/node_modules/**',
  '../../**/.svelte-kit/**',
  '../../**/functions/*',
  '../../**/static/*',
  '../../**/dist/**',
  '../../**/build/**',
  '../../**/.svelte/**',
  '../../**/.vercel_build_output/**',
  '../../**/.vercel/**',
  '../../**/coverage/**',
  '../../**/_/**',
  '../../**/vite.config.js.timestamp-*',
  '../../**/vite.config.ts.timestamp-*',
]
export const include_list = ['../../**/*.ts+(|x)']

export const rollup_typescript_config = {
  check: false, // Otherwise breaks build with lint errors
  tsconfig: 'tsconfig.json', // To throw error if no local tsconfig.json found
  include: include_list, // Mandatory to import TS modules from the monorepo
  exclude: exclude_list, // To ensure good perf
}

export default defineConfig({
  esbuild: false,
  plugins: [typescript(rollup_typescript_config), sveltekit()],
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
})
