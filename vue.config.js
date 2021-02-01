const process = require('process');

module.exports = {
  publicPath: process.env.PUBLIC_PATH || '',

  chainWebpack: (config) => {
    config.resolve.extensions
      .prepend('.vue');

    config.module
      .rule('eslint')
      .use('eslint-loader')
      .tap((opts) => ({ ...opts, emitWarning: true }));
  },
};
