export function MenuToggleButton({
	isMenuOpen,
	onClick,
}: {
	isMenuOpen: boolean;
	onClick: () => void;
}) {
	return (
		<button
			aria-expanded={isMenuOpen}
			aria-label="Toggle menu"
			className="flex cursor-pointer items-center justify-center p-2 text-black dark:text-zinc-50 sm:hidden"
			onClick={onClick}
		>
			<svg fill="none" height="24" viewBox="0 0 24 24" width="24">
				{isMenuOpen ? (
					<path
						d="M6 6l12 12M18 6L6 18"
						stroke="currentColor"
						strokeLinecap="round"
						strokeWidth="2"
					/>
				) : (
					<path
						d="M4 6h16M4 12h16M4 18h16"
						stroke="currentColor"
						strokeLinecap="round"
						strokeWidth="2"
					/>
				)}
			</svg>
		</button>
	);
}
