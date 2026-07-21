'use client';

import Tags from './Tags';

export default function CatForm({ setTagValue, tagValue }: CatFormProps) {
	const onSubmit = () => {
		console.log('onSubmit');
	};

	return (
		<div className="bg-cat-background mb-[20px] rounded-md p-[20px]">
			<form className="flex flex-col gap-[10px]" onSubmit={onSubmit}>
				<Tags setTagValue={setTagValue} tagValue={tagValue} />
				<input
					className="bg-cat-primary p-[10px] cursor-pointer w-xs"
					type="submit"
					value="Find a Cat"
				/>
			</form>
		</div>
	);
}

type CatFormProps = {
	setTagValue: (tag: string) => void;
	tagValue: string | undefined;
};
