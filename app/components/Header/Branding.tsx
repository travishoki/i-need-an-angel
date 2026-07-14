import Image from 'next/image';
import Link from 'next/link';

export default function Branding() {
	return (
		<Link className="flex min-w-0 items-center gap-3 sm:gap-4" href="/">
			<Image
				alt="Minion angel with wings and halo"
				className="h-12 w-auto flex-shrink-0 rounded-lg sm:h-20"
				height={405}
				src="https://i.pinimg.com/564x/42/03/2d/42032d0e52fed8b6a1293c74f35bfc0f.jpg"
				width={540}
			/>
			<div className="flex min-w-0 flex-col items-start text-left">
				<h1 className="truncate text-base font-semibold leading-tight tracking-tight text-black sm:text-xl dark:text-zinc-50">
          One in a <span className="text-minion-yellow">Minion</span>
				</h1>
				<p className="truncate text-xs leading-5 text-ocean-teal sm:text-sm dark:text-sky-cyan">
          Good Code. Better Karma. Banana.
				</p>
			</div>
		</Link>
	);
}
