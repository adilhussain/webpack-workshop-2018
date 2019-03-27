const webpack = require("webpack");
const webpackMerge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin");

const modeConfig = (env) => require(`./build-utils/webpack.${env.mode}.js`)(env)

module.exports = (env) => {
  console.log(env.mode);

  return webpackMerge({
    mode: env.mode,
    plugins: [
      new HtmlWebpackPlugin(), new webpack.ProgressPlugin()
    ]
  }, modeConfig(env))
}


