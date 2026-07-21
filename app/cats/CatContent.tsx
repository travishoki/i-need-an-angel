'use client';

import { useEffect, useState } from 'react';
import CatForm from './CatForm';
import CatList from './CatList';
import { ROOT_URL } from './const';
import { Cat } from './types';

const CATS_URL = `${ROOT_URL}/api/cats`;

export default function CatContent() {
	const [catsList, setCatList] = useState<string[]>([]);
	const [tagValue, setTagValue] = useState('');

	useEffect(() => {
		fetch(CATS_URL)
			.then((response) => response.json())
			.then((data: Cat[]) => {
				const newCatList = data.map((cat) => `${ROOT_URL}/cat/${cat.id}`);
				setCatList(newCatList);
			});
	}, []);

	return (
		<>
			<CatForm setTagValue={setTagValue} tagValue={tagValue} />
			<CatList catsList={catsList} />
		</>
	);
}
