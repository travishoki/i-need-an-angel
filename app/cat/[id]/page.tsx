import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import BackButton from '../BackButton';
import CatImage from '../CatImage';
import CatTags from '../CatTags';
import Details from '../Details';
import { getCat } from '../helpers';

type CatPageProps = {
	params: Promise<{ id: string }>;
};

export async function generateMetadata({
	params,
}: CatPageProps): Promise<Metadata> {
	const { id } = await params;
	const cat = await getCat(id);

	if (!cat) {
		return { title: 'Cat Not Found | One in a Minion' };
	}

	return { title: `${cat.tags[0] ?? 'Cat'} | One in a Minion` };
}

export default async function CatPage({ params }: CatPageProps) {
	const { id } = await params;
	const cat = await getCat(id);

	if (!cat) {
		notFound();
	}

	return (
		<div className="flex min-h-full flex-1 flex-col bg-white dark:bg-black">
			<div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
				<main className="flex w-full max-w-4xl flex-col gap-6 px-16 py-32">
					<BackButton />
					<CatImage cat={cat} />
					<CatTags tags={cat.tags} />
					<Details cat={cat} />
				</main>
			</div>
		</div>
	);
}
