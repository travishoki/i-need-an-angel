const STORAGE_KEY = 'favorite-cat-ids';

export function getFavorites(): string[] {
	if (typeof window === 'undefined') {
		return [];
	}

	try {
		const stored = sessionStorage.getItem(STORAGE_KEY);
		const parsed = stored ? JSON.parse(stored) : [];

		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}

function saveFavorites(ids: string[]) {
	try {
		sessionStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
	} catch {
		// Storage can be unavailable or full; the toggle still reflects in the UI.
	}
}

export function toggleCatFavorite(id: string): string[] {
	const favorites = getFavorites();

	const updated = favorites.includes(id)
		? favorites.filter((favoriteId) => favoriteId !== id)
		: [...favorites, id];

	saveFavorites(updated);

	return updated;
}
