export default function CatTags({ tags }: CatTagsProps) {
	return (
		<div className="flex flex-col gap-1">
			<h2 className="text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-500">
				Tags
			</h2>

			{tags.length ? (
				<ul className="flex flex-wrap gap-[10px]">
					{tags.map((tag) => (
						<li
							key={tag}
							className="bg-cat-accent rounded px-[10px] py-[5px] text-sm text-white"
						>
							{tag}
						</li>
					))}
				</ul>
			) : (
				<p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
					This cat has no tags.
				</p>
			)}
		</div>
	);
}

type CatTagsProps = {
	tags: string[];
};
