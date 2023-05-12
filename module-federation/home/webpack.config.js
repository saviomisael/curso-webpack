const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { devDependencies } = require('./package.json');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:9002/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'),
      },
    ],
    port: 9002,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            [require.resolve('@babel/preset-react'), { runtime: 'automatic' }],
          ],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new ModuleFederationPlugin({
      name: 'HomeApp',
      filename: 'remoteEntry.js',
      exposes: {
        './HomePage': './src/Home.jsx',
      },
      shared: {
        ...devDependencies,
        react: {
          singleton: true,
          requiredVersion: devDependencies['react'],
        },
        'react-dom': {
          singleton: true,
          requiredVersion: devDependencies['react-dom'],
        },
      },
    }),
  ],
};
