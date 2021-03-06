const merge = require("webpack-merge");
const path = require("path");
const base = require("./base");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(base, {
  mode: "production",
  output: {
    filename: "bundle.min.js"//,
    // path: path.resolve(__dirname, '../dist'),
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  }, plugins:[
   new CopyWebpackPlugin([
      { from: './assets', to: './assets' },
      { from: './scripts', to: './scripts' }
      // { from: '**/*', to: '/absolute/path/to/dest/' }
    ])
  ]
});
