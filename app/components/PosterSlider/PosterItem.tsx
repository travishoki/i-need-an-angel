import Image from 'next/image';
import type { Poster } from '../types';

export function PosterItem({
	isSelected,
	onSelect,
	poster,
}: {
	isSelected: boolean;
	onSelect: () => void;
	poster: Poster;
}) {
	return (
		<button
			className="flex flex-shrink-0 snap-start flex-col items-center gap-2 cursor-pointer"
			onClick={onSelect}
		>
			<Image
				alt={poster.title}
				className={`h-64 w-auto rounded-lg border-4 transition-colors ${
					isSelected ? 'border-minion-yellow' : 'border-transparent'
				}`}
				height={poster.height}
				src={poster.src}
				width={poster.width}
			/>
			<span
				className={`text-sm font-medium transition-colors ${
					isSelected
						? 'text-minion-yellow'
						: 'text-zinc-600 hover:text-minion-yellow dark:text-zinc-400'
				}`}
			>
				{poster.title}
			</span>
		</button>
	);
}
