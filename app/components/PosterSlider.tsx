"use client";

import { useEffect, useRef, useState } from "react";
import type { Poster } from "./types";
import PosterItem from "./PosterItem";
import SliderArrow from "./SliderArrow";

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
      <SliderArrow
        direction="left"
        disabled={!canScrollLeft}
        onClick={() => scrollByAmount(-320)}
      />

      <div
        ref={scrollRef}
        className="no-scrollbar flex flex-row items-start gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {posters.map((poster) => (
          <PosterItem
            key={poster.src}
            poster={poster}
            isSelected={selected.src === poster.src}
            onSelect={() => onSelect(poster)}
          />
        ))}
      </div>

      <SliderArrow
        direction="right"
        disabled={!canScrollRight}
        onClick={() => scrollByAmount(320)}
      />
    </div>
  );
}
