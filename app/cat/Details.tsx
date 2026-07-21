import { formatDate } from './helpers';
import { CatDetails } from '../cats/types';

export default function Details({ cat }: DetailsProps) {
	return (
		<div className="flex flex-col gap-1">
			<h2 className="text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-500">
				Details
			</h2>
			<dl className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
				<div className="flex gap-2">
					<dt className="font-medium">Added:</dt>
					<dd>{formatDate(cat.created_at)}</dd>
				</div>
				<div className="flex gap-2">
					<dt className="font-medium">Type:</dt>
					<dd>{cat.mimetype}</dd>
				</div>
				<div className="flex gap-2">
					<dt className="font-medium">ID:</dt>
					<dd>{cat.id}</dd>
				</div>
			</dl>
		</div>
	);
}

type DetailsProps = {
	cat: CatDetails;
};
