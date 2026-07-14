import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      quotes: [
        1,
        'single',
        { allowTemplateLiterals: true, avoidEscape: true },
      ],
      'react/jsx-sort-props': [
        'error',
        { ignoreCase: true, reservedFirst: ['key'] },
      ],
      'sort-keys': ['error', 'asc', { caseSensitive: false, natural: true }],
    },
  },
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
