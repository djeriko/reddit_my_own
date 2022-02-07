const path = require('path')
const nodeExternals = require('webpack-node-externals')

const NODE_ENV = process.env.NODE_ENV;

const IS_DEV = NODE_ENV === 'development'
const IS_PROD = NODE_ENV === 'production'

module.exports = {
  target: 'node',
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js'
  },
  resolve: {
    extensions: [ '.jsx', '.js', '.json', '.ts', '.tsx'],
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.[tj]sx?$/,
      use: ['ts-loader'],
      exclude: /node_modules/
    }]
  },
  optimization: {
    minimize: false,
  }
}