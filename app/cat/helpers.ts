import { ROOT_URL } from '../cats/const';
import { Cat } from '../cats/types';

const CAT_URL = `${ROOT_URL}/cat`;

/**
 * Fetches a single cat, or null when the id doesn't match one.
 */
export function getCat(id: string): Promise<Cat | null> {
	return fetch(`${CAT_URL}/${id}?json=true`).then((response) =>
		response.ok ? response.json() : null,
	);
}

/**
 * Formats an ISO date string as a readable date, e.g. "July 18, 2022".
 *
 * The locale is pinned so the server and client render the same string.
 */
export function formatDate(isoDate: string) {
	return new Date(isoDate).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
}
