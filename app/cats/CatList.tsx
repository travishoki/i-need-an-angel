'use client';

import { useEffect, useState } from 'react';

const ROOT_URL = 'https://cataas.com';

const CATS_URL = `${ROOT_URL}/api/cats`;

type Cat = {
	id: string;
};

export default function CatList() {
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
		<ul className="flex flex-wrap justify-center gap-[20px]">
			{catsList.map((cat, index) => (
				<li
					key={index}
					className="bg-cat-accent h-[300px] w-[300px] rounded-lg overflow-hidden"
				>
					<img alt="Cat" className="h-full w-full object-contain" src={cat} />
				</li>
			))}
		</ul>
	);
}
