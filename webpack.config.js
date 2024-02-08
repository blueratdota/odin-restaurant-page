const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Odin Restaurant Page',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
  },
 module: {
   rules: [
    //for css
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
     {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
     },
     {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
     },

   ],
 },
};