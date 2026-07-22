import { CAT_URL } from '../../cats/const';
import { CatDetails } from '../../cats/types';

export function getCat(id: string): Promise<CatDetails | null> {
	return fetch(`${CAT_URL}/${id}?json=true`).then((response) =>
		response.ok ? response.json() : null,
	);
}
