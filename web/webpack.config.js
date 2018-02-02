// Dotenv
require('dotenv').config();

// Webpack config
const webpack = require('webpack');
const path = require('path');
const NodeObjectHash = require('node-object-hash');

const ManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeEnv = process.env.NODE_ENV;
const wdsPort = process.env.WDS_PORT;
const isProd = nodeEnv === 'production';

const cachePath = path.join(__dirname, '../node_modules/.cache');
const entryPath = path.join(__dirname);
const resourcePath = path.join(__dirname, '../screens');
const wdsPath = path.join(__dirname, './dev');
const buildPath = path.join(__dirname, './public');

// Common plugins
const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(nodeEnv),
    'Platform.OS': JSON.stringify('web'),
    'process.version.appVersion': JSON.stringify('haHAA')
  }),
];

// Common loaders
const imageLoader = [];
const loaders = [
  {
    test: /\.js$/,
    // Add every directory that needs to be compiled by Babel during the build
    include: [
      entryPath,
      resourcePath,
      path.resolve(__dirname, '../node_modules/react-native-uncompiled')
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
          "react-native"
        ]
      }
    }
  },
  {
    test: /\.(woff2?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: isProd ? 'file-loader?publicPath=../&name=fonts/[name].[hash].[ext]' :
                  'file-loader?name=fonts/[name].[ext]'
  },
  {
    test: /.*\.(gif|png|jpe?g)$/i,
    loaders: imageLoader
  }
];

// Configure plugins and loaders depending on environment settings
if (isProd) {
  plugins.push(
    new HardSourceWebpackPlugin({
      cacheDirectory: `${cachePath}/hard-source/[confighash]`,
      recordsPath: `${cachePath}/hard-source/[confighash]/records.json`,
      configHash: NodeObjectHash({sort: false}).hash,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new WebpackMd5Hash(),
    new ManifestPlugin(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['index'],
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),
    new HtmlWebpackPlugin({
      title: 'Farm Management Dashboard',
      filename: './index.html',
      inject: true,
      template: './templates/index-prod.ejs',
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[chunkhash].css',
      allChunks: true,
    })
  );

  imageLoader.push(
    'file-loader?name=img/[name].[hash].[ext]',
    {
      loader: 'image-webpack-loader',
      query: {
        optipng: {
          quality: '65-90',
          speed: 4,
          optimizationLevel: 7,
          interlaced: false
        },
        gifsicle: {
          quality: '65-90',
          speed: 4,
          optimizationLevel: 7,
          interlaced: false
        },
        mozjpeg: {
          quality: '65-90',
          speed: 4,
          optimizationLevel: 7,
          interlaced: false,
          progressive: true
        }
      }
    }
  );

  loaders.push(
    {
      test: /\.(css)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
      }),
    }
  );
} else {
  plugins.push(new webpack.HotModuleReplacementPlugin());
  imageLoader.push('file-loader?name=img/[name].[ext]');

  loaders.push({
    test: /\.(css)$/,
    use: [
      'style-loader',
      'css-loader',
    ]
  });
}

// If

module.exports = {
  devtool: isProd ? 'source-map' : 'eval',
  context: entryPath,
  entry: {
    index: './index.js',
  },
  output: {
    path: isProd ? `${buildPath}/` : `${wdsPath}`,
    filename: isProd ? 'js/[name].[chunkhash].js' : 'js/[name].js',
    chunkFilename: isProd ? 'js/[name].[chunkhash].js' : 'js/[name].js',
    publicPath: './'
  },
  module: { loaders },
  resolve: {
    modules: [
      resourcePath,
      path.resolve(__dirname, '../node_modules')
    ],
    extensions: ['.web.js', '.js'],
  },
  plugins,
  devServer: {
    contentBase: wdsPath,
    historyApiFallback: true,
    port: wdsPort,
    hot: true,
    inline: true,
    publicPath: '/',
    compress: isProd,
    watchOptions: {
      poll: true
    },
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      }
    },
  }
};
