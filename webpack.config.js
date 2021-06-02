const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('sass-loader');

const config = {
  mode: 'development',
  entry: {
    index: [
      '@babel/polyfill',
      './react/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          happyPackMode: true
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
          plugins: [
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            ['@babel/plugin-proposal-decorators', { legacy: true }]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
           'style-loader',
           'css-loader' 
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader:'url-loader',
        options:{
          limit: 2408,
          name: './image/[name].[ext]'
        }
      },
    ]
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.css','.scss','sass'],
  },
  plugins: [
    //new webpack.optimize.OccurrenceOrderPlugin(),
    //new webpack.NamedModulesPlugin()
    new HtmlWebpackPlugin({
      title: 'react',
      template: path.resolve(__dirname, './react/index.html'),
      filename: 'index.html',
    }),
  ],
  watchOptions: {
    // ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000
  }
}

module.exports = config
