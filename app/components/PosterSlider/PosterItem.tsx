import Image from "next/image";
import type { Poster } from "../types";

export default function PosterItem({
  poster,
  isSelected,
  onSelect,
}: {
  poster: Poster;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className="flex flex-shrink-0 snap-start flex-col items-center gap-2 cursor-pointer"
    >
      <Image
        src={poster.src}
        alt={poster.title}
        width={poster.width}
        height={poster.height}
        className={`h-64 w-auto rounded-lg border-4 transition-colors ${
          isSelected ? "border-minion-yellow" : "border-transparent"
        }`}
      />
      <span
        className={`text-sm font-medium transition-colors ${
          isSelected
            ? "text-minion-yellow"
            : "text-zinc-600 hover:text-minion-yellow dark:text-zinc-400"
        }`}
      >
        {poster.title}
      </span>
    </button>
  );
}
