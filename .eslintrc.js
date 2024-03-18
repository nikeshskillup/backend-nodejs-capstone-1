module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 8 // Update to support ES8 features
  },
  rules: {
    'no-console': 'off', // Optional: Turn off 'no-console' rule if you want to allow console usage
    'no-var': 'error', // Optional: Enforce 'const' and 'let' instead of 'var'
    'prefer-const': 'error' // Optional: Enforce usage of 'const' where possible
  }
}
