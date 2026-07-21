'use client';

import { FormEvent, useCallback, useEffect, useState } from 'react';
import CatForm from './CatForm';
import CatList from './CatList';
import { ROOT_URL } from './const';
import { Cat } from './types';

const CATS_URL = `${ROOT_URL}/api/cats`;

export default function CatContent() {
	const [catsList, setCatList] = useState<string[]>([]);
	const [tagValue, setTagValue] = useState('');
	const [loading, setLoading] = useState(true);

	const fetchCats = useCallback((tag: string) => {
		let url = CATS_URL;

		if (tag) {
			url += `?tags=${tag}`;
		}

		fetch(url)
			.then((response) => response.json())
			.then((data: Cat[]) => {
				const newCatList = data.map((cat) => `${ROOT_URL}/cat/${cat.id}`);
				setCatList(newCatList);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		fetchCats('');
	}, [fetchCats]);

	const onClickSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);
		fetchCats(tagValue);
	};

	return (
		<>
			<CatForm
				onClickSubmit={onClickSubmit}
				onTagChange={setTagValue}
				tagValue={tagValue}
			/>

			{loading ? <p>Loading...</p> : <CatList catsList={catsList} />}
		</>
	);
}
