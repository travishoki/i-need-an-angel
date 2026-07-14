"use client";

import { useState } from "react";
import Header from "./components/Header";
import PosterSlider from "./components/PosterSlider";
import MovieDetails from "./components/MovieDetails";
import type { Poster } from "./components/types";

const posters: Poster[] = [
  {
    description:
      "Despicable Me is an American computer-animated 3D adventure comedy heist film distributed by Universal Pictures as the first offering from its Illumination division. The film debuted at the Annecy International Animation Film Festival on June 9, 2010, and was theatrically released in the United States on July 9, 2010, the film stars Steve Carell as Gru, a super-villain who adopts three girls (Miranda Cosgrove as Margo, Dana Gaier as Edith and Elsie Fisher as Agnes) from an orphanage and Jason Segel as Vector Perkins, a rival of Gru who steals the Great Pyramid of Giza. When Gru learns of Vector's heist, he plans an even greater heist to shrink and steal The Moon.",
    height: 395,
    link: "https://despicableme.fandom.com/wiki/Despicable_Me_(film)",
    src: "https://static.wikia.nocookie.net/despicableme/images/9/9c/Despicable_me_ver6_xlg.jpg/revision/latest/scale-to-width-down/267",
    title: "Despicable Me",
    width: 267,
  },
  {
    description:
      "He is a former supervillain turned AVL agent alongside his wife Lucy Wilde. He has three adoptive daughters Margo, Edith, and Agnes, and a biological son, Felonious Gru Jr.. Gru is also the leader, boss, and father-figure of the Minions, is partners with Dr. Nefario and is also the twin brother of Dru Gru.",
    height: 424,
    link: "https://despicableme.fandom.com/wiki/Gru",
    src: "https://static.wikia.nocookie.net/despicableme/images/6/6a/Gru.jpeg/revision/latest/scale-to-width-down/268?cb=20210119032211",
    title: "Gru",
    width: 268,
  },
  {
    description:
      "Minions is an American 3D-computer-animated action-comedy, film directed by Pierre Coffin and Kyle Balda and starring the Minions. It is a spin-off prequel, and a flipped perspective of Despicable Me from the Minions’ POV. It is the fifth highest-grossing film of 2015.",
    height: 2048,
    link: "https://despicableme.fandom.com/wiki/Minions_(film)",
    src: "https://static.wikia.nocookie.net/despicableme/images/1/11/Minions_Poster_01.jpg/revision/latest",
    title: "Minions",
    width: 1293,
  },
  {
    description:
      "Despicable Me 3 (stylized as DESPICABLE M3) is a 2017 American 3D computer-animated science fiction action comedy drama adventure movie produced by Illumination Entertainment. It is the third installment in the Despicable Me film series and a sequel to Despicable Me 2 (2013). The movie was released on June 30th, 2017, by Universal Pictures.",
    height: 838,
    link: "https://despicableme.fandom.com/wiki/Despicable_Me_3",
    src: "https://static.wikia.nocookie.net/despicableme/images/e/ee/Dru.jpg/revision/latest/scale-to-width-down/268?cb=20221019063058",
    title: "Despicable Me 3",
    width: 536,
  },
  {
    description:
      "Despicable Me 4 is an animated superhero action comedy film and the fourth installment in the Despicable Me film series, the sixth overall in the Despicable Me franchise, and the sequel to 2017's Despicable Me 3. The film was released on July 3, 2024. It was also the second-highest grossing animated film of 2024 (after Kung Fu Panda 4), as well as the 15th-highest grossing animated film of all-time (after The Peanuts Movie, Mr Peabody & Sherman, Shrek, Minions: The Rise of Gru, Trolls, etc.).",
    height: 424,
    link: "https://despicableme.fandom.com/wiki/Despicable_Me_4",
    src: "https://static.wikia.nocookie.net/despicableme/images/a/a4/Despicable_Me_4_Minions_Got_Bite_Poster.jpg/revision/latest/scale-to-width-down/268",
    title: "Despicable Me 4",
    width: 268,
  },
  {
    description:
      "Minions: The Rise of Gru (also known as Minions 2: The Rise of Gru, or just Minions 2) is a sequel to the 2015 film Minions. The film was released on July 1, 2022.",
    height: 335,
    link: "https://despicableme.fandom.com/wiki/Minions:_The_Rise_of_Gru",
    src: "https://static.wikia.nocookie.net/despicableme/images/1/15/Minions_The_Rise_of_Gru_main_poster.jpg/revision/latest/scale-to-width-down/268",
    title: "Minions: The Rise of Gru",
    width: 268,
  },
  {
    description:
      "Set in 1920s Hollywood, the story follows a different tribe of mischievous yellow henchmen (completely seperate from the tribe shown in the 2015 film that would go on to serve Gru) as they crash a film set, quickly become Hollywood sensations, throw lavish parties in mansions, and inspire fans to wear overalls and goggles. Their 15 minutes of fame are abruptly cut short when sound is introduced to film, as they are completely unable to follow a script in their native Minionese language. Destitute and hopeless, the Minions roam the streets of Hollywood looking for a purpose, and a new evil master to serve. Aiming to reinvent themselves, our heroes James, Ed, and Henry have a different plan and break away from their tribe. They have fallen in love with making movies and want to make an awesome monster movie of their own! With the help of a spellbook taken from an old boss (an evil sorcerer they used to work for), James, Ed, and Henry summon and befriend a cute Lovecraftian creature to help summon more monsters to play the villains in their movie, but their casting attempts ultimately unleash a chaotic, globe-threatening destroyer with too many eyes as well as a whole horde of monsters to bring dominance to the planet. With things going completely off the rails, James, Henry, Ed, and all their buddies must work together to save the world from the monster mayhem they had just caused, and to fully find their true purpose.",
    height: 424,
    link: "https://despicableme.fandom.com/wiki/Monsters_%26_Minions",
    src: "https://static.wikia.nocookie.net/despicableme/images/8/82/Minions_%26_Monsters_Eyeballs_Poster.jpg/revision/latest/scale-to-width-down/268",
    title: "Monsters & Minions",
    width: 268,
  },
];

export default function Home() {
  const [selected, setSelected] = useState(posters[0]);

  return (
    <div className="flex min-h-full flex-1 flex-col bg-white dark:bg-black">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center gap-10 py-32 px-16 bg-white dark:bg-black sm:items-start">
          <PosterSlider posters={posters} selected={selected} onSelect={setSelected} />
          <MovieDetails movie={selected} />
        </main>
      </div>
    </div>
  );
}
