var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require('webpack')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    index: './src/js/index.js',
    device: './src/js/device.js',
    device_detail: './src/js/device_detail.js',
    devicenum: './src/js/devicenum.js',
    price: './src/js/price.js',
    gif: './src/js/gif.js',
    gains: './src/js/gains.js',
    account: './src/js/account.js',
    purse: './src/js/purse.js',
    balance: './src/js/balance.js',
    gifmanage: './src/js/gifmanage.js',
    addgif: './src/js/addgif.js',
    customnum: './src/js/customnum.js',
    sellername: './src/js/sellername.js',
    addaddr: './src/js/addaddr.js',
    delivery: './src/js/delivery.js',
    regis: './src/js/regis.js',
    login: './src/js/login.js',
    s_index: './src/js/s_index.js',
    s_pay: './src/js/s_pay.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    // 配置全局使用 jquery
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery"
    })
  ]
}
