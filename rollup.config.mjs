import typescript from '@rollup/plugin-typescript';

/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'src/index.ts',
  output: {
    dir: 'dist/es',
    format: 'es',
    preserveModules: true,
    sourcemap: true
  },
  external: /node_modules/,
  plugins: [
    typescript({ tsconfig: './tsconfig.json' })
  ]
};

export default config;
