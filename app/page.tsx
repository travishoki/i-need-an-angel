'use client';

import { useState } from 'react';
import PosterSlider from './components/PosterSlider';
import MovieDetails from './components/MovieDetails';
import { posters } from './data/posters';

export default function Home() {
  const [selected, setSelected] = useState(posters[0]);

  return (
    <div className="flex min-h-full flex-1 flex-col bg-white dark:bg-black">
      <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center gap-10 py-32 px-16 bg-white dark:bg-black sm:items-start">
          <PosterSlider
            onSelect={setSelected}
            posters={posters}
            selected={selected}
          />
          <MovieDetails key={selected.src} movie={selected} />
        </main>
      </div>
    </div>
  );
}
