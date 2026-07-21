import type { Metadata } from 'next';

import CatList from './CatList';

export const metadata: Metadata = {
	title: 'Cats | One in a Minion',
};

export default function Cats() {
	return (
		<div className="flex min-h-full flex-1 flex-col bg-white dark:bg-black">
			<div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
				<CatList />
			</div>
		</div>
	);
}
