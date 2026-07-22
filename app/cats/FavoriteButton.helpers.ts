const STORAGE_KEY = 'favorite-cat-ids';

function readFavorites(): string[] {
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

export function isCatFavorite(id: string) {
	return readFavorites().includes(id);
}

export function toggleCatFavorite(id: string) {
	const favorites = readFavorites();
	const isFavorite = favorites.includes(id);

	const updated = isFavorite
		? favorites.filter((favoriteId) => favoriteId !== id)
		: [...favorites, id];

	try {
		sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
	} catch {
		// Storage can be unavailable or full; the toggle still reflects in the UI.
	}

	return !isFavorite;
}
