'use client';

export default function CatList({ catsList }: CatListProps) {
	return (
		<ul className="flex flex-wrap justify-center gap-[20px]">
			{catsList.map((cat, index) => (
				<li
					key={index}
					className="bg-cat-accent h-[300px] w-[300px] rounded-lg overflow-hidden"
				>
					<img alt="Cat" className="h-full w-full object-contain" src={cat} />
				</li>
			))}
		</ul>
	);
}

type CatListProps = {
	catsList: string[];
};
