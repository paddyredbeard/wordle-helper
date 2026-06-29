import globals from 'globals'
import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        React: 'readonly',
        ReactDOM: 'readonly',
        findMatches: 'readonly'
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-unused-vars': ['warn', { args: 'none' }],
      'no-useless-constructor': 'warn',
      'no-undef': 'warn'
    }
  },
  {
    ignores: ['dist/', '*.html']
  }
]
