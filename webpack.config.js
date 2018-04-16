const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const config = {
  target: 'web',
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
      public: path.resolve(__dirname, 'public/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
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
  })
]
module.exports = config
