const TerserPlugin = require('terser-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    new WebpackObfuscator(
      {
        rotateStringArray: true,
      },
      ['excluded_bundle_name.js']
    ),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
