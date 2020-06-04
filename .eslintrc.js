module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@tettoffensive',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'markdown',
  ],
  // add your custom rules here
  rules: {
    'no-shadow': 'warn',
    'no-param-reassign': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'max-len': 'off',
  },
  overrides: [
    {
      files: [
        '**/*.md'
      ]
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],
}
