'use client';

import { useEffect, useState } from 'react';

const ROOT = 'https://cataas.com';

const CAT_URL = `${ROOT}/cat`;

export default function Cats() {
	const [cat, setCat] = useState<string>();

	useEffect(() => {
		fetch(CAT_URL)
			.then((response) => response.blob())
			.then((data) => {
				console.dir(data);
				setCat(URL.createObjectURL(data));
			});
	}, []);

	return (
		<div className="flex min-h-full flex-1 flex-col bg-white dark:bg-black">
			<div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
				<ul>
					<li>
						<img src={cat} />
					</li>
				</ul>
			</div>
		</div>
	);
}
