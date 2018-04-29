const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')

let PUBLIC_PATH = 'http://localhost:3000/'
if (process.env.NODE_ENV !== 'production') {
  PUBLIC_PATH = 'https://a92a8ea1.ngrok.io/'
}

const config = {
  target: 'web',
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
      public: path.resolve(__dirname, 'public/')
    }
  },
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name]-[hash].js',
    publicPath: PUBLIC_PATH
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(ttf)$/,
        use: ['file-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8000,
              name: 'images/[hash]-name.[ext]'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}

config.devtool = 'source-map'
if (process.env.NODE_ENV !== 'production') {
  config.devtool = 'eval-source-map'
}

config.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        compress: {
          inline: false
        }
      }
    })
  ],
  splitChunks: {
    cacheGroups: {
      default: false,
      commons: {
        test: /node_modules/,
        name: 'vendor',
        chunks: 'initial',
        minSize: 1
      }
    }
  }
}

config.plugins = [
  ...config.plugins,
  new CompressionPlugin({
    algorithm: 'gzip'
  }),
  new Dotenv()
]

if (process.env.NODE_ENV === 'production') {
  config.plugins = [
    ...config.plugins,
    new SWPrecacheWebpackPlugin(
      {
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: true,
        navigateFallback: PUBLIC_PATH + 'index.html',
        staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
      }
    ),
    new WebpackPwaManifest({
      name: 'PG Tasks',
      short_name: 'PTasks',
      description: 'Do it!',
      background_color: '#01579b',
      theme_color: '#01579b',
      'theme-color': '#01579b',
      start_url: '/',
      icons: [
        {
          src: path.resolve('src/image/icons/icon-72x72.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('assets', 'icons')
        }
      ]
    })
  ]
}

module.exports = config
