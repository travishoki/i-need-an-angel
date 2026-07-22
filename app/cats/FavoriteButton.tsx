'use client';

export default function FavoriteButton({
	isFavorite,
	onClick,
}: FavoriteButtonProps) {
	return (
		<button
			aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
			aria-pressed={isFavorite}
			className="absolute top-[10px] right-[10px] cursor-pointer text-white transition-transform hover:scale-110"
			onClick={onClick}
			type="button"
		>
			<svg
				className="h-[28px] w-[28px] drop-shadow"
				fill={isFavorite ? 'currentColor' : 'none'}
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l8.8 8.8 8.8-8.8a5.5 5.5 0 0 0 0-7.8z" />
			</svg>
		</button>
	);
}

type FavoriteButtonProps = {
	isFavorite: boolean;
	onClick: () => void;
};
