// rollup.config.mjs

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve({
      extensions: ['.js', '.json']
    }),
    commonjs()
  ]
};
