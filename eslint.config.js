/** @type {import('eslint').Linter.FlatConfig[]} */
import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import * as tseslint from 'typescript-eslint'

export default [
  // Ignored files & folders
  {
    ignores: ['node_modules', 'dist', 'build', 'coverage', 'tsconfig.tsbuildinfo'],
  },

  // Base recommended rules (JS)
  js.configs.recommended,

  // TypeScript recommended (no type-checking for speed)
  ...tseslint.configs.recommended,

  // Project rules
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier,
      import: importPlugin,
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': { typescript: true },
    },
    rules: {
      'prettier/prettier': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'import/order': [
        'warn',
        { 'newlines-between': 'always', alphabetize: { order: 'asc', caseInsensitive: true } },
      ],
    },
  },
]
