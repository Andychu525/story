module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 0,
    quotes: [2, 'single', 'avoid-escape'],
    semi: [2, 'never']
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
