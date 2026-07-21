'use client';

import Link from 'next/link';

import { ROOT_URL } from './const';
import { Cat } from './types';

export default function CatList({ catsList }: CatListProps) {
	return (
		<ul className="flex flex-wrap justify-center gap-[20px]">
			{catsList.map((cat) => (
				<li
					key={cat.id}
					className="bg-cat-accent h-[300px] w-[300px] rounded-lg overflow-hidden"
				>
					<Link className="block h-full w-full" href={`/cat/${cat.id}`}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							alt="Cat"
							className="h-full w-full object-contain"
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
