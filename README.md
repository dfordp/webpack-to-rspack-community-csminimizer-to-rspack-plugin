Change import and usage of  from css-minimizer-webpack-plugin to use included rspack.LightningCssMinimizerRspackPlugin.
### Before

```ts
//change the import statement to const rspack = require('@rspack/core');
//track where this CssMinimizerPlugin variable is used
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  optimization: {
    //change CssMinimizerPlugin to rspack.LightningCssMinimizerRspackPlugin
    minimizer: [new CssMinimizerPlugin()],
  },
};
```

### After

```ts
const rspack = require('@rspack/core');

module.exports = {
  // ...
  optimization: {
    minimizer: [new rspack.LightningCssMinimizerRspackPlugin(options)],
  },
};
```

