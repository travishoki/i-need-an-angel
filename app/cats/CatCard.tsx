'use client';

import Link from 'next/link';
import { SyntheticEvent } from 'react';

import { ROOT_URL } from './const';
import FavoriteButton from './FavoriteButton';
import { Cat } from './types';

export default function CatCard({ cat }: CatCardProps) {
	// Animates the whole card in once its image has actually arrived. Also runs
	// on error, so a failed image shows its broken state rather than leaving the
	// card invisible at opacity 0.
	const revealCard = (e: SyntheticEvent<HTMLImageElement>) => {
		e.currentTarget.closest('li')?.classList.add('fade-in');
	};

	return (
		<li className="bg-cat-accent relative h-[300px] w-[300px] overflow-hidden rounded-lg opacity-0">
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

			<FavoriteButton />
		</li>
	);
}

type CatCardProps = {
	cat: Cat;
};
