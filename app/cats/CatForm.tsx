'use client';

import { SubmitEvent } from 'react';
import Tags from './Tags';

export default function CatForm({
	onClickSubmit,
	onTagChange,
	tagValue,
}: CatFormProps) {
	return (
		<div className="bg-cat-background mb-[20px] rounded-md p-[20px] w-full max-w-[500px]">
			<form className="flex flex-col gap-[10px]" onSubmit={onClickSubmit}>
				<Tags onTagChange={onTagChange} tagValue={tagValue} />
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
	onClickSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
	onTagChange: (tag: string) => void;
	tagValue: string | undefined;
};
