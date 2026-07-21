'use client';

import { useEffect, useState } from 'react';
import { ROOT_URL } from './const';

const TAGS_URL = `${ROOT_URL}/api/tags`;

export default function Tags() {
	const [tagList, setTagList] = useState<string[]>([]);

	useEffect(() => {
		fetch(TAGS_URL)
			.then((response) => response.json())
			.then((data) => {
				setTagList(data);
			});
	}, []);

	return (
		<select className="bg-white p-[10px]">
			{tagList.map((tag, index) => (
				<option key={index} value={tag}>
					{tag}
				</option>
			))}
		</select>
	);
}
