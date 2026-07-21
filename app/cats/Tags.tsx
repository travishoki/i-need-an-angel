'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { ROOT_URL } from './const';

const TAGS_URL = `${ROOT_URL}/api/tags`;

export default function Tags() {
	const [tagList, setTagList] = useState<string[]>([]);
	const [value, setValue] = useState('');

	useEffect(() => {
		fetch(TAGS_URL)
			.then((response) => response.json())
			.then((data) => {
				setTagList(data);
			});
	}, []);

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setValue(e.target.value);
	};

	return (
		<select
			className={`bg-white p-[10px] ${value ? 'text-black' : 'text-zinc-400'}`}
			onChange={onChange}
			value={value}
		>
			<option disabled hidden selected value="">
				Select a tag
			</option>
			{tagList.map((tag, index) => (
				<option key={index} value={tag}>
					{tag}
				</option>
			))}
		</select>
	);
}
