const HtmlWebpackPlugin = require('html-webpack-plugin');
require('babel-polyfill');
require('autoprefixer');

const config = {
  /*
  Provides process.env.NODE_ENV with value production. Enables FlagDependencyUsagePlugin, 
  FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, 
  SideEffectsFlagPlugin and UglifyJsPlugin. Cool, no need to include them myself
  */
  mode: 'production',
  target: 'web',
  entry: ['babel-polyfill', './src/index'],

  output: {
    path: `${__dirname}/dist`,
    publicPath: './',
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
          'postcss-loader',
          'sass-loader',
        ],
        include: __dirname,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10000 }
          },
          {
            loader: 'img-loader',
            options: { progressive: true }
          },
        ],
        // loader: 'url-loader?limit=10000!img?progressive=true',
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
