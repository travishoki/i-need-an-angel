import type { Metadata } from 'next';

import { pageTitle } from '../helpers';
import CatContent from './CatContent';
import Logo from './Logo';

export const metadata: Metadata = {
	title: pageTitle('Cats'),
};

export default function Cats() {
	return (
		<div className="flex min-h-full flex-1 flex-col bg-white dark:bg-black">
			<div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 pb-[50px] font-sans dark:bg-black">
				<Logo />
				<CatContent />
			</div>
		</div>
	);
}
