const HtmlWebpackPlugin = require('html-webpack-plugin');
require('babel-polyfill');

const config = {
  watch: true,
  mode: 'development',
  target: 'web',
  entry: ['babel-polyfill', './src/index'],
  devServer: {
    historyApiFallback: true,
  },

  output: {
    path: `${__dirname}/dist`,
    filename: 'app.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
        },
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10000 },
          },
          {
            loader: 'img-loader',
            options: { progressive: true },
          },
        ],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        include: __dirname,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      filename: 'index.html',
    }),
  ],
};


module.exports = config;
