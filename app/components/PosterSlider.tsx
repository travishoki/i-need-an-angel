"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Poster } from "./types";

export default function PosterSlider({
  posters,
  selected,
  onSelect,
}: {
  posters: Poster[];
  selected: Poster;
  onSelect: (poster: Poster) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByAmount = (amount: number) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="group/slider relative w-full">
      <button
        onClick={() => scrollByAmount(-320)}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
        className={`absolute left-1 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-ink-brown/80 p-2 text-blush-cream opacity-0 transition-opacity group-hover/slider:opacity-100 sm:flex ${
          canScrollLeft
            ? "cursor-pointer"
            : "cursor-not-allowed group-hover/slider:opacity-60"
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        ref={scrollRef}
        className="no-scrollbar flex flex-row items-start gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {posters.map((poster) => (
          <button
            key={poster.src}
            onClick={() => onSelect(poster)}
            className="flex flex-shrink-0 snap-start flex-col items-center gap-2 cursor-pointer"
          >
            <Image
              src={poster.src}
              alt={poster.title}
              width={poster.width}
              height={poster.height}
              className={`h-64 w-auto rounded-lg border-4 transition-colors ${
                selected.src === poster.src
                  ? "border-minion-yellow"
                  : "border-transparent"
              }`}
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

      <button
        onClick={() => scrollByAmount(320)}
        disabled={!canScrollRight}
        aria-label="Scroll right"
        className={`absolute right-1 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-ink-brown/80 p-2 text-blush-cream opacity-0 transition-opacity group-hover/slider:opacity-100 sm:flex ${
          canScrollRight
            ? "cursor-pointer"
            : "cursor-not-allowed group-hover/slider:opacity-60"
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
