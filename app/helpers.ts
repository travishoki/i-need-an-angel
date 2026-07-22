import { SITE_NAME } from './const';

/**
 * Builds a page title, e.g. pageTitle('Cats') -> 'Cats | One in a Minion'.
 */
export function pageTitle(pageName: string) {
	return `${pageName} | ${SITE_NAME}`;
}
