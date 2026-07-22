'use client';

import { SubmitEvent } from 'react';
import Tags from './Tags';

export default function CatForm({
	onChangeTag,
	onClickSubmit,
	tagValue,
}: CatFormProps) {
	return (
		<div className="bg-cat-background mb-[20px] rounded-md p-[20px] w-full max-w-[500px]">
			<form className="flex flex-col gap-[10px]" onSubmit={onClickSubmit}>
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
	onClickSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
	tagValue: string | undefined;
};
