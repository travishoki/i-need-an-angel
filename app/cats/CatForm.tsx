'use client';

import Tags from './Tags';

export default function CatForm() {
	const onSubmit = () => {
		console.log('onSubmit');
	};

	return (
		<div className="bg-cat-background mb-[25px] rounded-md p-[20px]">
			<form onSubmit={onSubmit}>
				<Tags />
				<input title="Find a Cat" type="submit" />
			</form>
		</div>
	);
}
