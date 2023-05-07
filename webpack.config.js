const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
    publicPath: '/dist/',
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'src'),
      },
    ],
  },
};
