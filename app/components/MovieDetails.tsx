import type { Poster } from "./types";

export default function MovieDetails({ movie }: { movie: Poster }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
      <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
        {movie.title}
      </h2>
      <p className="max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {movie.bio}
      </p>
      <a
        href={movie.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 rounded-full bg-minion-yellow px-5 py-2.5 text-sm font-semibold text-ink-brown transition-transform hover:scale-105"
      >
        View on wiki
      </a>
    </div>
  );
}
