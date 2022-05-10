module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['airbnb-base', '../../.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/core-modules': ['electron'],
  },
  rules: {},
};
