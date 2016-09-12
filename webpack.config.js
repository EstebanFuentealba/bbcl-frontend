var path = require('path')
const webpack = require('webpack')

const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const isProd = (process.env.NODE_ENV === 'production');
const getPlugins = function() {
  var plugins = [];
  plugins.push(new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }));
  if (isProd) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: true },
      output: {
          comments: false
      }
    }));
    plugins.push(new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(es)$/))
    plugins.push(new ExtractTextPlugin('app.css'));
  } else {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }
  return plugins;
}

const getLoaders = function() {
  var loaders = [];
  loaders.push({
    test: /\.js$/,
    loaders: [ 'babel' ],
    exclude: /node_modules/,
    include: __dirname
  });
  if (isProd) {
    loaders.push({
      test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader?minimize&sourceMap!autoprefixer-loader!sass-loader')
    });
  } else {
    loaders.push({
        test: /\.scss$/,
        loader: 'style!css!autoprefixer-loader!sass?sourceMap&minimize'
    });
  }
  return loaders;
};
const getEntry = function() {
  var entires = ['./src/index'];
  if (!isProd) {
    entires.push('webpack-hot-middleware/client');
  }
  return entires;
}
module.exports = {
  devtool: 'source-map',
  entry: getEntry(),
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: getPlugins(),
  module: {
    loaders: getLoaders()
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ]
}
