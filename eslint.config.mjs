import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      quotes: [1, 'single', { allowTemplateLiterals: true, avoidEscape: true }],
      'react/jsx-sort-props': [
        'error',
        { ignoreCase: true, reservedFirst: ['key'] },
      ],
      'sort-keys': ['error', 'asc', { caseSensitive: false, natural: true }],
    },
  },
  // Turns off ESLint formatting rules that would otherwise fight Prettier
  // on save. Must stay last so it can override the configs above.
  prettierConfig,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
