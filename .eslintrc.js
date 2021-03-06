module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ["error", "ignorePackages", {
      vue: 'never',
      js: 'never',
    }],
    'consistent-return': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-bitwise': ['error', { 'allow': ['~'] }],
  },
};
