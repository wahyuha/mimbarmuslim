const webpack = require('webpack');
const path = require('path');
var APP_DIR = path.resolve(__dirname, 'static/src/assets/');

module.exports = {
  entry: {
      app: './index.js',
      vendor: ["react", "react-dom"],
  },
  output: {
      filename: 'prayer.app.js',
      path: path.resolve(__dirname, '../static/build'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
        {
            test: /\.js/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        },
        { test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
        { test: /\.js$/, enforce: "pre", loader: "source-map-loader" },
        {
            test: /\.css$/,
            loaders: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' ,
            exclude: /node_modules/
        }
    ]
  },
  plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
          API_URL: JSON.stringify('//localhost:80/'),
          PRODUCTION: JSON.stringify(true),
          VERSION: JSON.stringify("1.0"),
          BROWSER_SUPPORTS_HTML5: true,
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({name:"vendor", filename: "./prayer.vendor.js"}),
    new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        compress: {
            warnings: false
        },
        comments: false
    })
  ]
}