import './src/components/style.css'

const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './public'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
