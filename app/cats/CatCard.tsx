'use client';

import Link from 'next/link';
import { SyntheticEvent } from 'react';

import FavoriteButton from './FavoriteButton';
import { getCardSize, getHeartSize } from './CatCard.helpers';

export default function CatCard({
	catId,
	isFavorite,
	onToggleFavorite,
	size,
	url,
}: CatCardProps) {
	// Animates the whole card in once its image has actually arrived. Also runs
	// on error, so a failed image shows its broken state rather than leaving the
	// card invisible at opacity 0.
	const revealCard = (e: SyntheticEvent<HTMLImageElement>) => {
		e.currentTarget.closest('li')?.classList.add('fade-in');
	};

	const cardSize = getCardSize(size);
	const heartSize = getHeartSize(size);

	return (
		<li
			className="bg-cat-accent relative overflow-hidden rounded-lg opacity-0"
			style={{ height: cardSize, width: cardSize }}
		>
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
				size={heartSize}
			/>
		</li>
	);
}

type CatCardProps = {
	catId: string;
	isFavorite: boolean;
	onToggleFavorite: (id: string) => void;
	size: 's' | 'm' | 'l';
	url: string;
};
