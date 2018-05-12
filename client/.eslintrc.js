module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      spread: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ['react'],
  globals: {
    graphql: false,
    window: false,
    document: false,
    google: false,
    css: false
  },
  parser: 'babel-eslint',
  extends: ['airbnb'],
  rules: {
    'linebreak-style': 0,
    "semi": 0,
  }
};
