import Link from 'next/link';

export default function BackButton() {
	return (
		<Link
			className="text-sm font-medium text-zinc-600 transition-colors hover:text-minion-yellow dark:text-zinc-400"
			href="/cats"
		>
			&larr; Back to All Cats
		</Link>
	);
}
