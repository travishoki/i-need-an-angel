import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | One in a Minion',
};

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center gap-6 bg-white px-16 py-32 text-center dark:bg-black">
      <Image
        alt="Minion angel with wings and halo"
        className="h-64 w-auto rounded-lg"
        height={405}
        src="https://i.pinimg.com/564x/42/03/2d/42032d0e52fed8b6a1293c74f35bfc0f.jpg"
        width={540}
      />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          404: Lost in <span className="text-minion-yellow">Minion</span>-land
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          This page wandered off looking for a new villain to serve. Let&apos;s
          get you back home.
        </p>
      </div>
      <Link
        className="mt-2 rounded-full bg-minion-yellow px-5 py-2.5 text-sm font-semibold text-ink-brown transition-transform hover:scale-105"
        href="/"
      >
        Back to Home
      </Link>
    </div>
  );
}
