// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  globals: {
    window: true,
    module: true
  },
  rules: {
    "indent": ["error", 2],
    "max-len": ["warn", { "code": 100 }],
    "eqeqeq": "error",
    "no-empty-function": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-dupe-else-if": "error",
    "no-else-return": ["error"],
    "dot-location": ["error", "property"],
    "no-unreachable": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_",
      "caughtErrorsIgnorePattern": "^_"
    }],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "no-trailing-spaces": "error",
  }
}