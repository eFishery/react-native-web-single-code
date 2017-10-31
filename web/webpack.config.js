const webpack = require('webpack');
const path = require('path');

// const nodeEnv = process.env.NODE_ENV;
const nodeEnv = 'development';

// web/webpack.config.js

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
  test: /\.js$/,
  // Add every directory that needs to be compiled by Babel during the build
  include: [
    path.resolve(__dirname, '../'),
    // path.resolve(__dirname, 'node_modules/react-native-uncompiled')
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // This aliases 'react-native' to 'react-native-web' and includes only
      // the modules needed by the app
      plugins: ['react-native-web/babel'],
      // The 'react-native' preset is recommended (or use your own .babelrc)
      babelrc: false,
      presets: [
        ["env", { modules: false }],
        "react-native",
      ]
    }
  }
};

// This is needed for webpack to import static images in JavaScript files
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]'
    }
  }
};

const resourcePath = path.join(__dirname, './');
const buildPath = path.join(__dirname, './public');

module.exports = {
  // ...the rest of your config
  devtool: nodeEnv === 'production' ? 'cheap-source-map' : 'eval',
  context: resourcePath,
  entry: {
    test: './index.js'
  },
  output: {
    path: buildPath,
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  resolve: {
      modules: [
        resourcePath,
        path.resolve(__dirname, 'node_modules')
      ],
    },
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration
    ]
  },

  plugins: [
    // `process.env.NODE_ENV === 'production'` must be `true` for production
    // builds to eliminate development checks and reduce build size. You may
    // wish to include additional optimizations.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
      'Platform.OS': JSON.stringify('web'),
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],

  resolve: {
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: [ '.web.js', '.js' ]
  }
}
