module.exports = {
    esversion: 6,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true // Add node environment
  },
  extends: 'standard',
  overrides: [
    {
      files: [
        '*.js' // Remove '.eslintrc.{js,cjs}' and use '*.js' to match all JavaScript files
      ],
      parserOptions: {
        ecmaVersion: 6, // Update to use ECMAScript 6
        sourceType: 'module' // Specify source type as 'module'
      }
    }
  ],
  rules: {
    'no-var': 'error', // Use 'let' or 'const' instead of 'var'
    'no-unused-vars': 'warn' // Warn about unused variables
    // Add more rules as needed
  }
};
