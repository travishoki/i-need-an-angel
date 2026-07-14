import Image from "next/image";
import type { Poster } from "./types";

export default function PosterGrid({
  posters,
  selected,
  onSelect,
}: {
  posters: Poster[];
  selected: Poster;
  onSelect: (poster: Poster) => void;
}) {
  return (
    <div className="flex flex-row flex-wrap items-start gap-4 w-full">
      {posters.map((poster) => (
        <button
          key={poster.src}
          onClick={() => onSelect(poster)}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <Image
            src={poster.src}
            alt={poster.title}
            width={poster.width}
            height={poster.height}
            className="h-64 w-auto rounded-lg"
          />
          <span
            className={`text-sm font-medium transition-colors ${
              selected.src === poster.src
                ? "text-minion-yellow"
                : "text-zinc-600 hover:text-minion-yellow dark:text-zinc-400"
            }`}
          >
            {poster.title}
          </span>
        </button>
      ))}
    </div>
  );
}
