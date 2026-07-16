import path from 'path';

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(process.cwd(), 'src'),
    },
    compress: true,
    port: 8080,
    open: true,
  },
};
