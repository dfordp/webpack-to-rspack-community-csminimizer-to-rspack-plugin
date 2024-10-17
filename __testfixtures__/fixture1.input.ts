//change the import statement to const rspack = require('@rspack/core');
//track where this CssMinimizerPlugin variable is used
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  optimization: {
    //change CssMinimizerPlugin to rspack.LightningCssMinimizerRspackPlugin
    minimizer: [new CssMinimizerPlugin()],
  },
};