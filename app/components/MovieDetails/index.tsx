'use client';

import { useState } from 'react';
import type { Poster } from '../types';
import ReadMoreButton from './ReadMoreButton';

const PREVIEW_LENGTH = 200;

export default function MovieDetails({ movie }: { movie: Poster }) {
	const [expanded, setExpanded] = useState(false);
	const isTruncated = movie.description.length > PREVIEW_LENGTH;
	const displayedDescription =
		expanded || !isTruncated
			? movie.description
			: `${movie.description.slice(0, PREVIEW_LENGTH)}...`;

	return (
		<div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
			<h2 className="text-xl font-semibold text-black dark:text-zinc-50">
				{movie.title}
			</h2>
			<p className="max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
				{displayedDescription}
			</p>

			{isTruncated && (
				<ReadMoreButton
					expanded={expanded}
					onClick={() => setExpanded((prev) => !prev)}
				/>
			)}

			<a
				className="mt-2 rounded-full bg-minion-yellow px-5 py-2.5 text-sm font-semibold text-ink-brown transition-transform hover:scale-105"
				href={movie.link}
				rel="noopener noreferrer"
				target="_blank"
			>
				View on wiki
			</a>
		</div>
	);
}
