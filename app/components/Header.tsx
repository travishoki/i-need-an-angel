import Image from "next/image";

export default function Header() {
  return (
    <header className="flex w-full items-center gap-4 border-b border-zinc-200 px-16 py-2 dark:border-zinc-800">
      <Image
        src="https://i.pinimg.com/564x/42/03/2d/42032d0e52fed8b6a1293c74f35bfc0f.jpg"
        alt="Minion angel with wings and halo"
        width={540}
        height={405}
        className="h-20 w-auto rounded-lg"
      />
      <div className="flex flex-col items-start text-left">
        <h1 className="text-xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
          One in a <span className="text-minion-yellow">Minion</span>
        </h1>
        <p className="text-sm leading-5 text-ocean-teal dark:text-sky-cyan">
          Good Code. Better Karma. Banana.
        </p>
      </div>
    </header>
  );
}
