'use client';

import CatCard from './CatCard';
import { Cat } from './types';

export default function CatList({ catsList }: CatListProps) {
	return (
		<ul className="flex flex-wrap justify-center gap-[20px]">
			{catsList.map((cat) => (
				<CatCard key={cat.id} cat={cat} />
			))}
		</ul>
	);
}

type CatListProps = {
	catsList: Cat[];
};
