import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About | One in a Minion',
};

export default function About() {
	return (
		<div className="flex min-h-full flex-1 flex-col bg-white dark:bg-black">
			<div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
				<main className="flex w-full max-w-4xl flex-col gap-6 py-32 px-16 bg-white text-left dark:bg-black">
					<h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
						<span className="text-sky-cyan">About</span> One in a{' '}
						<span className="text-minion-yellow">Minion</span>
					</h1>
					<p className="max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
						One in a Minion is a small poster gallery for the Despicable Me and
						Minions franchise. Browse the slider, pick a poster, and read up on
						the film (or the minion) it belongs to.
					</p>
					<div className="flex flex-col gap-1">
						<h2 className="text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-500">
							Design Inspiration
						</h2>
						<p className="max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
							The winged, halo-topped minion in the header is a nod to Angel
							Studios / Vid Angel&apos;s halo-and-wings branding. The color
							palette throughout the site is pulled straight from the
							movies&apos; own artwork.
						</p>
					</div>
					<div className="flex flex-col gap-1">
						<h2 className="text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-500">
							Under the Hood
						</h2>
						<ul className="max-w-3xl list-disc space-y-1 pl-5 text-base leading-7 text-zinc-600 dark:text-zinc-400">
							<li>
								Started from the standard{' '}
								<code className="text-sm">create-next-app</code> boilerplate
							</li>
							<li>Built with assistance of Claude Code</li>
							<li>Next.js, using the App Router for pages and routing</li>
							<li>
								Tailwind CSS, for styling and the movie-inspired color palette
							</li>
							<li>
								A few ESLint rules, added mostly as an exercise to get
								comfortable with where they go in the config
							</li>
							<li>Prettier, wired up for auto-formatting on save</li>
							<li>
								Jest render tests on a couple of components, covering expanding,
								collapsing, and disabled/click behavior
							</li>
							<li>
								Husky git hooks, running lint-staged on commit and the test
								suite on push
							</li>
						</ul>
					</div>
				</main>
			</div>
		</div>
	);
}
