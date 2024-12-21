module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: "react"
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'standard',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      'prettier',
      'plugin:storybook/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    ignorePatterns: [
      'dist', 'public', 'node_modules',
      'package-lock.json', 'package.json',
      'README.md', '.gitignore',
    ],
    overrides: [
      {
        env: {
          node: true
        },
        files: [
          '.eslintrc.{js,cjs}',
          '**/*.{js,jsx,ts,tsx}'
        ],
        parserOptions: {
          sourceType: 'script'
        }
      }
    ],
    plugins: [
      'react',
      'react-refresh'
    ],
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'eqeqeq': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
  