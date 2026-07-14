export default function SliderArrow({
	direction,
	disabled,
	onClick,
}: {
	direction: 'left' | 'right';
	disabled: boolean;
	onClick: () => void;
}) {
	const isLeft = direction === 'left';

	return (
		<button
			aria-label={`Scroll ${direction}`}
			className={`absolute ${isLeft ? 'left-1' : 'right-1'} top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-ink-brown/80 p-2 text-blush-cream opacity-0 transition-opacity group-hover/slider:opacity-100 sm:flex ${
				disabled
					? 'cursor-not-allowed group-hover/slider:opacity-60'
					: 'cursor-pointer'
			}`}
			disabled={disabled}
			onClick={onClick}
		>
			<svg fill="none" height="20" viewBox="0 0 24 24" width="20">
				<path
					d={isLeft ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'}
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
			</svg>
		</button>
	);
}
