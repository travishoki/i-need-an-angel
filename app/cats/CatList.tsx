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
		<ul>
			{catsList.map((cat, index) => (
				<li key={index}>
					<img alt="Cat" src={cat} />
				</li>
			))}
		</ul>
	);
}
