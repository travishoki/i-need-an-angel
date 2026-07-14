"use client";

import { useState } from "react";
import Image from "next/image";
import PosterGrid from "./components/PosterGrid";
import MovieDetails from "./components/MovieDetails";

const posters = [
  {
    src: "https://static.wikia.nocookie.net/despicableme/images/9/9c/Despicable_me_ver6_xlg.jpg/revision/latest/scale-to-width-down/267",
    title: "Despicable Me",
    link: "https://despicableme.fandom.com/wiki/Despicable_Me_(film)",
    bio: "Despicable Me is an American computer-animated 3D adventure comedy heist film distributed by Universal Pictures as the first offering from its Illumination division. The film debuted at the Annecy International Animation Film Festival on June 9, 2010, and was theatrically released in the United States on July 9, 2010, the film stars Steve Carell as Gru, a super-villain who adopts three girls (Miranda Cosgrove as Margo, Dana Gaier as Edith and Elsie Fisher as Agnes) from an orphanage and Jason Segel as Vector Perkins, a rival of Gru who steals the Great Pyramid of Giza. When Gru learns of Vector's heist, he plans an even greater heist to shrink and steal The Moon.",
    width: 267,
    height: 395,
  },
  {
    src: "https://static.wikia.nocookie.net/despicableme/images/6/6a/Gru.jpeg/revision/latest/scale-to-width-down/268?cb=20210119032211",
    title: "Gru",
    link: "https://despicableme.fandom.com/wiki/Gru",
    bio: "He is a former supervillain turned AVL agent alongside his wife Lucy Wilde. He has three adoptive daughters Margo, Edith, and Agnes, and a biological son, Felonious Gru Jr.. Gru is also the leader, boss, and father-figure of the Minions, is partners with Dr. Nefario and is also the twin brother of Dru Gru.",
    width: 268,
    height: 424,
  },
  {
    src: "https://static.wikia.nocookie.net/despicableme/images/1/11/Minions_Poster_01.jpg/revision/latest",
    title: "Minions",
    link: "https://despicableme.fandom.com/wiki/Minions_(film)",
    bio: "Minions is an American 3D-computer-animated action-comedy, film directed by Pierre Coffin and Kyle Balda and starring the Minions. It is a spin-off prequel, and a flipped perspective of Despicable Me from the Minions’ POV. It is the fifth highest-grossing film of 2015.",
    width: 1293,
    height: 2048,
  },
];

export default function Home() {
  const [selected, setSelected] = useState(posters[0]);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-10 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          src="https://i.pinimg.com/564x/42/03/2d/42032d0e52fed8b6a1293c74f35bfc0f.jpg"
          alt="Minion angel with wings and halo"
          width={540}
          height={405}
          className="w-[32rem] h-auto self-center rounded-lg"
        />
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            One in a <span className="text-minion-yellow">Minion</span>
          </h1>
          <p className="max-w-md text-lg leading-8 text-ocean-teal dark:text-sky-cyan">
            Good Code. Better Karma. Banana.
          </p>
        </div>
        <PosterGrid posters={posters} selected={selected} onSelect={setSelected} />
        <MovieDetails movie={selected} />
      </main>
    </div>
  );
}
