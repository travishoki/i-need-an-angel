'use client';

import { FormEvent } from 'react';
import Tags from './Tags';

export default function CatForm({
	onClickSubmit,
	onTagChange,
	tagValue,
}: CatFormProps) {
	return (
		<div className="bg-cat-background mb-[20px] rounded-md p-[20px]">
			<form className="flex flex-col gap-[10px]" onSubmit={onClickSubmit}>
				<Tags onTagChange={onTagChange} tagValue={tagValue} />
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
	onClickSubmit: (e: FormEvent<HTMLFormElement>) => void;
	onTagChange: (tag: string) => void;
	tagValue: string | undefined;
};
