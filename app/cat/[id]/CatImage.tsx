import { ROOT_URL } from '../../cats/const';
import { CatDetails } from '../../cats/types';

export default function CatImage({ cat }: CatImageProps) {
	const alt = cat.tags.join(', ') || 'Cat';
	const src = `${ROOT_URL}/cat/${cat.id}`;

	return (
		<>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				alt={alt}
				className="mx-auto max-h-[60vh] w-auto max-w-full rounded"
				src={src}
			/>
		</>
	);
}

type CatImageProps = {
	cat: CatDetails;
};
