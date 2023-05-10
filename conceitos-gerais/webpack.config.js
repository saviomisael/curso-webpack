const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/app.js',
      dependOn: 'shared',
    },
    test: {
      import: './src/test.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devServer: {
    port: 8082,
    static: [
      {
        directory: path.join(__dirname, 'dist'),
      },
    ],
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new DotenvPlugin(),
    new HtmlWebpackPlugin({
      title: 'Curso Webpack',
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: path.join(__dirname, 'public', 'penguin.png'),
    }),
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
