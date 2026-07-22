import { CAT_URL } from '../../cats/const';
import { CatDetails } from '../../cats/types';

/**
 * Fetches a single cat, or null when the id doesn't match one.
 */
export function getCat(id: string): Promise<CatDetails | null> {
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
