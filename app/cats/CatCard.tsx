'use client';

import Link from 'next/link';
import { SyntheticEvent } from 'react';

import FavoriteButton from './FavoriteButton';

export default function CatCard({
	catId,
	isFavorite,
	onToggleFavorite,
	url,
}: CatCardProps) {
	// Animates the whole card in once its image has actually arrived. Also runs
	// on error, so a failed image shows its broken state rather than leaving the
	// card invisible at opacity 0.
	const revealCard = (e: SyntheticEvent<HTMLImageElement>) => {
		e.currentTarget.closest('li')?.classList.add('fade-in');
	};

	return (
		<li className="bg-cat-accent relative h-[300px] w-[300px] overflow-hidden rounded-lg opacity-0">
			<Link className="block h-full w-full" href={`/cat/${catId}`}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					alt="Cat"
					className="h-full w-full object-contain"
					onError={revealCard}
					onLoad={revealCard}
					src={url}
				/>
			</Link>

			<FavoriteButton
				isFavorite={isFavorite}
				onClick={() => onToggleFavorite(catId)}
			/>
		</li>
	);
}

type CatCardProps = {
	catId: string;
	isFavorite: boolean;
	onToggleFavorite: (id: string) => void;
	url: string;
};
