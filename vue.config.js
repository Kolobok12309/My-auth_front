const process = require('process');

console.log(process.env.PUBLIC_PATH);
console.log(process.env, Object.keys(process.env));

module.exports = {
  publicPath: process.env.PUBLIC_PATH || '',
};
