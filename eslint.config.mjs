import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys';

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	// Turns off ESLint formatting rules that would otherwise fight Prettier
	// on save. Must stay before the rules block below so our choices win.
	prettierConfig,
	{
		plugins: {
			'sort-destructure-keys': sortDestructureKeys,
			'typescript-sort-keys': typescriptSortKeys,
		},
		rules: {
			'comma-dangle': ['error', 'always-multiline'],
			indent: ['error', 'tab', { SwitchCase: 1 }],
			'no-magic-numbers': [
				'error',
				{
					ignore: [-1, 0, 1],
					ignoreArrayIndexes: true,
					ignoreDefaultValues: true,
				},
			],
			quotes: [1, 'single', { allowTemplateLiterals: true, avoidEscape: true }],
			'react/jsx-sort-props': [
				'error',
				{ ignoreCase: true, reservedFirst: ['key'] },
			],
			'sort-destructure-keys/sort-destructure-keys': 'error',
			'sort-keys': ['error', 'asc', { caseSensitive: false, natural: true }],
			'typescript-sort-keys/interface': 'error',
			'typescript-sort-keys/string-enum': 'error',
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
