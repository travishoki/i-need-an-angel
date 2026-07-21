import type { Metadata } from 'next';
import Image from 'next/image';

import CatContent from './CatContent';

export const metadata: Metadata = {
	title: 'Cats | One in a Minion',
};

export default function Cats() {
	return (
		<div className="flex min-h-full flex-1 flex-col bg-white dark:bg-black">
			<div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
				<Image
					alt="Cat Logo"
					className="mb-[30px]"
					height="212"
					src="https://img.notionusercontent.com/s3/prod-files-secure%2F323f87db-5e5a-420d-baa2-c2314d070723%2F182b30db-6c36-40c8-90ff-075c79dbb5ea%2Fcatalog-logo.png/size/w=950?exp=1784683145&sig=HmCzImYLSklSavUFKoLShfY2vpR2H4Ila4i538rQXQs&imgBuildSrc=presignImageUrl&id=56c36e48-952c-4f49-bbf9-e062ee80a3b0&table=block&mtd=so"
					width="474"
				/>
				<CatContent />
			</div>
		</div>
	);
}
