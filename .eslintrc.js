module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['react-app', 'react-app/jest', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
