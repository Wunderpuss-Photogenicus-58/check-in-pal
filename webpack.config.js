const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './client/index.js',
  mode: 'development',
  module: {
      rules: [
        {
          test:  /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }], ['@babel/preset-react', { targets: "defaults" }],
              ]
            }
          }
        },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      ]
    },
  output: {
    path: path.resolve(__dirname, 'build'),
    // publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './client/index.html',
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },
    // historyApiFallback: true,
    compress: true,
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000',
    },
  }
}