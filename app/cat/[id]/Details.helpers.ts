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
