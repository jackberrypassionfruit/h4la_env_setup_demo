import pluginJs from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import securityPlugin from 'eslint-plugin-security';
import unicornPlugin from 'eslint-plugin-unicorn';
import unusedImports from "eslint-plugin-unused-imports";
import globals from 'globals';
import tsPlugin from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Security
  securityPlugin.configs.recommended,
  {
    files: ['**/*.ts'],
  },
  {
    languageOptions: { globals: globals.node },
  },
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      'func-style': ['off', 'expression'],
      'no-restricted-syntax': ['off', 'ForOfStatement'],
      'no-console': ['false'],
      'prefer-template': 'error',
      // quotes: ['error', 'single', { avoidEscape: true }],
      'no-unused-vars': 'off',
      "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "off",
      "unused-imports/no-unused-vars": [
        "off",
        {
          "vars": "all",
          "varsIgnorePattern": "^_",
          "args": "after-used",
          "argsIgnorePattern": "^_",
        },
      ]
    },
  },
  // TypeScript Eslint
  {
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
  // Prettier
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': [
        1,
        {
          endOfLine: 'lf',
          printWidth: 180,
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'es5',
        },
      ],
    },
  },
  // Unicorn
  {
    plugins: {
      unicorn: unicornPlugin,
    },
    rules: {
      'unicorn/empty-brace-spaces': 'off',
      'unicorn/no-null': 'off',
    },
  },
  pluginJs.configs.recommended,
  ...tsPlugin.configs.recommended,
];
