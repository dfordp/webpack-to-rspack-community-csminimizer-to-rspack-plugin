const rspack = require('@rspack/core');

module.exports = {
  // ...
  optimization: {
    minimizer: [new rspack.LightningCssMinimizerRspackPlugin(options)],
  },
};