'use client';

import CatCard from './CatCard';
import { Cat } from './types';

export default function CatList({
	catsList,
	favoriteIds,
	onToggleFavorite,
}: CatListProps) {
	return (
		<ul className="flex flex-wrap justify-center gap-[20px]">
			{catsList.map((cat) => (
				<CatCard
					key={cat.id}
					catId={cat.id}
					isFavorite={favoriteIds.includes(cat.id)}
					onToggleFavorite={onToggleFavorite}
					url={cat.url}
				/>
			))}
		</ul>
	);
}

type CatListProps = {
	catsList: Cat[];
	favoriteIds: string[];
	onToggleFavorite: (id: string) => void;
};
