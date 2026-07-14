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
            One in a Minion is a small poster gallery for the Despicable Me
            and Minions franchise. Browse the slider, pick a poster, and read
            up on the film (or the minion) it belongs to.
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
              Tech Stack
            </h2>
            <p className="max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Built with Next.js and Tailwind CSS.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-500">
              Housekeeping
            </h2>
            <p className="max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              We also added a few ESLint rules along the way, mostly as an
              exercise to get comfortable with where they go in the config.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
