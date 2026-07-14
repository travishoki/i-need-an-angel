import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | One in a Minion",
};

export default function About() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white dark:bg-black">
      <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex w-full max-w-4xl flex-col gap-6 py-32 px-16 bg-white text-left dark:bg-black">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            <span className="text-sky-cyan">About</span> One in a{" "}
            <span className="text-minion-yellow">Minion</span>
          </h1>
          <p className="max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            One in a Minion is a small poster gallery for the Despicable Me
            and Minions franchise. Browse the slider, pick a poster, and read
            up on the film (or the minion) it belongs to.
          </p>
          <p className="max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Built with Next.js and Tailwind CSS, with a color palette pulled
            straight from the movies&apos; own artwork.
          </p>
        </main>
      </div>
    </div>
  );
}
