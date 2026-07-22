'use client';

import CatCard from './CatCard';
import { ROOT_URL } from './const';
import { Cat } from './types';

export default function FavoritedCatList({
	favoriteIds,
	onToggleFavorite,
}: FavoritedCatListProps) {
	const catsList = favoriteIds.map(
		(id) =>
			({
				id,
				url: `${ROOT_URL}/cat/${id}`,
			}) as Cat,
	);

	return (
		<ul className="flex flex-wrap justify-center gap-[20px]">
			{catsList.map((cat) => (
				<CatCard
					key={cat.id}
					catId={cat.id}
					isFavorite={true}
					onToggleFavorite={onToggleFavorite}
					size="s"
					url={cat.url}
				/>
			))}
		</ul>
	);
}

type FavoritedCatListProps = {
	favoriteIds: string[];
	onToggleFavorite: (id: string) => void;
};
