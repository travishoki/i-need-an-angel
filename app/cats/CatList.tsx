'use client';

import Link from 'next/link';
import { SyntheticEvent } from 'react';

import { ROOT_URL } from './const';
import { Cat } from './types';

export default function CatList({ catsList }: CatListProps) {
	// Animates the whole card in once its image has actually arrived. Also runs
	// on error, so a failed image shows its broken state rather than leaving the
	// card invisible at opacity 0.
	const revealCard = (e: SyntheticEvent<HTMLImageElement>) => {
		e.currentTarget.closest('li')?.classList.add('fade-in');
	};

	return (
		<ul className="flex flex-wrap justify-center gap-[20px]">
			{catsList.map((cat) => (
				<li
					key={cat.id}
					className="bg-cat-accent h-[300px] w-[300px] rounded-lg opacity-0 overflow-hidden"
				>
					<Link className="block h-full w-full" href={`/cat/${cat.id}`}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							alt="Cat"
							className="h-full w-full object-contain"
							onError={revealCard}
							onLoad={revealCard}
							src={`${ROOT_URL}/cat/${cat.id}`}
						/>
					</Link>
				</li>
			))}
		</ul>
	);
}

type CatListProps = {
	catsList: Cat[];
};
