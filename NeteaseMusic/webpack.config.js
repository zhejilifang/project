const webpack = require("webpack");

module.exports = function(webpackConfig, env) {
  if (process.env.env === 'prod') {
    webpackConfig.plugins.push(new webpack.IgnorePlugin(/^vconsole$/))
  }
  return webpackConfig
}