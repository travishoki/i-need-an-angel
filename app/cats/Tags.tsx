'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { ROOT_URL } from './const';

const TAGS_URL = `${ROOT_URL}/api/tags`;

export default function Tags({ setTagValue, tagValue }: TagsProps) {
	const [tagList, setTagList] = useState<string[]>([]);

	useEffect(() => {
		fetch(TAGS_URL)
			.then((response) => response.json())
			.then((data) => {
				setTagList(data);
			});
	}, []);

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setTagValue(e.target.value);
	};

	return (
		<select
			className={`bg-white p-[10px] ${tagValue ? 'text-black' : 'text-zinc-400'}`}
			onChange={onChange}
			value={tagValue}
		>
			{tagList.map((tag, index) => (
				<option key={index} value={tag}>
					{tag}
				</option>
			))}
		</select>
	);
}

type TagsProps = {
	setTagValue: (tag: string) => void;
	tagValue: string | undefined;
};
