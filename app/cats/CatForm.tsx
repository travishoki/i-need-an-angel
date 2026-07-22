'use client';

import { ChangeEvent, SubmitEvent } from 'react';
import Tags from './Tags';

export default function CatForm({
	onChangeTag,
	onChangeText,
	onClickSubmit,
	tagValue,
	textValue,
}: CatFormProps) {
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChangeText(e.target.value);
	};

	return (
		<div className="bg-cat-background mb-[20px] rounded-md p-[20px] w-full max-w-[500px]">
			<form className="flex flex-col gap-[10px]" onSubmit={onClickSubmit}>
				<input
					className={`bg-white px-[10px] py-[5px] rounded ${textValue ? 'text-black' : 'text-zinc-400'}`}
					onChange={onChange}
					placeholder="Add a phrase"
					type="text"
					value={textValue}
				/>
				<Tags onChangeTag={onChangeTag} tagValue={tagValue} />
				<input
					className="bg-cat-primary px-[15px] py-[5px] cursor-pointer w-fit rounded self-center"
					type="submit"
					value="Find a Cat"
				/>
			</form>
		</div>
	);
}

type CatFormProps = {
	onChangeTag: (tag: string) => void;
	onChangeText: (text: string) => void;
	onClickSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
	tagValue: string | undefined;
	textValue: string | undefined;
};
