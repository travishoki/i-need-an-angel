'use client';

import { useState } from 'react';
import CatForm from './CatForm';
import CatList from './CatList';

export default function CatContent() {
	const [tagValue, setTagValue] = useState('');

	return (
		<>
			<CatForm setTagValue={setTagValue} tagValue={tagValue} />
			<CatList />
		</>
	);
}
