import Image from "next/image";

const posters = [
  {
    src: "https://static.wikia.nocookie.net/despicableme/images/9/9c/Despicable_me_ver6_xlg.jpg/revision/latest/scale-to-width-down/267",
    alt: "Despicable Me poster",
    width: 267,
    height: 395,
  },
  {
    src: "https://static.wikia.nocookie.net/despicableme/images/6/6a/Gru.jpeg/revision/latest/scale-to-width-down/268?cb=20210119032211",
    alt: "Gru",
    width: 268,
    height: 424,
  },
  {
    src: "https://static.wikia.nocookie.net/despicableme/images/1/11/Minions_Poster_01.jpg/revision/latest",
    alt: "Minions poster",
    width: 1293,
    height: 2048,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-10 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            One in a <span className="text-minion-yellow">Minion</span>
          </h1>
          <p className="max-w-md text-lg leading-8 text-ocean-teal dark:text-sky-cyan">
            Good Code. Better Karma. Banana.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full">
          {posters.map((poster) => (
            <Image
              key={poster.src}
              src={poster.src}
              alt={poster.alt}
              width={poster.width}
              height={poster.height}
              className="w-full h-64 object-cover rounded-lg"
            />
          ))}
        </div>
      </main>
    </div>
  );
}
