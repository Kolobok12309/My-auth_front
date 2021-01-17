const process = require('process');

console.log(process.env.PUBLIC_PATH);

module.exports = {
  publicPath: process.env.PUBLIC_PATH || '',
};
