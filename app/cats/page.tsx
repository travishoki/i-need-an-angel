'use client';

// import type { Metadata } from 'next';
import { useEffect, useState } from 'react';

// export const metadata: Metadata = {
// 	title: 'Cats | One in a Minion',
// };

const ROOT_URL = 'https://cataas.com';

const CATS_URL = `${ROOT_URL}/api/cats`;

type Cat = {
	id: string;
};

export default function Cats() {
	const [catsList, setCatList] = useState<string[]>([]);

	useEffect(() => {
		fetch(CATS_URL)
			.then((response) => response.json())
			.then((data: Cat[]) => {
				const newCatList = data.map((cat) => `${ROOT_URL}/cat/${cat.id}`);
				setCatList(newCatList);
			});
	}, []);

	return (
		<div className="flex min-h-full flex-1 flex-col bg-white dark:bg-black">
			<div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
				<ul>
					{catsList.map((cat, index) => (
						<li key={index}>
							<img alt="Cat" src={cat} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
