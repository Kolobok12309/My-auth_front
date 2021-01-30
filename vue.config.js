const process = require('process');

module.exports = {
  publicPath: process.env.PUBLIC_PATH || '',

  configureWebpack: (config) => {
    const extensionsWithoutVue = config.resolve.extensions.filter((ext) => ext !== '.vue');

    config.resolve.extensions = ['.vue', ...extensionsWithoutVue];
  },
};
