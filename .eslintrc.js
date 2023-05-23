module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/recommended', 'eslint:recommended', 'plugin:prettier/recommended'],
  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    'vue'
  ],
  globals: { tinymce: true, UE: true },
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'vue/name-property-casing': ['error', 'PascalCase'],
    'no-console': 'off',
    'no-debugger': 'off',
    'no-spaced-func': 2,
    'no-const-assign': 2,
    'no-alert': 0,
    'no-useless-escape': 0,
    'no-control-regex': 0,
    'no-unused-vars': 0,
    'space-before-function-paren': [0, 'always']
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
};
