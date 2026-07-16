import { Branding } from './Branding';
import { Navigation } from './Navigation';

export function Header() {
	return (
		<header className="relative w-full border-b border-zinc-200 px-4 py-2 sm:px-16 dark:border-zinc-800">
			<div className="flex w-full items-center justify-between gap-4">
				<Branding />
				<Navigation />
			</div>
		</header>
	);
}
