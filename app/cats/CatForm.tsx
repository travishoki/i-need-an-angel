'use client';

import Tags from './Tags';

export default function CatForm() {
	const onSubmit = () => {
		console.log('onSubmit');
	};

	return (
		<div className="bg-cat-background mb-[25px] rounded-md p-[20px]">
			<form className="flex flex-col gap-[10px]" onSubmit={onSubmit}>
				<Tags />
				<input
					className="bg-cat-primary p-[10px] cursor-pointer"
					type="submit"
					value="Find a Cat"
				/>
			</form>
		</div>
	);
}
