'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuToggleButton } from './MenuToggleButton';

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
];

export function Navigation() {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const linkClass = (href: string) =>
		`text-sm font-medium transition-colors ${
			pathname === href
				? 'text-minion-yellow'
				: 'text-zinc-600 hover:text-minion-yellow dark:text-zinc-400'
		}`;

	return (
		<>
			<nav className="hidden items-center gap-6 sm:flex">
				{navLinks.map((link) => (
					<Link
						key={link.href}
						className={linkClass(link.href)}
						href={link.href}
					>
						{link.label}
					</Link>
				))}
			</nav>

			<MenuToggleButton
				isMenuOpen={isMenuOpen}
				onClick={() => setIsMenuOpen((prev) => !prev)}
			/>

			{isMenuOpen && (
				<nav className="absolute left-0 right-0 top-full z-20 flex flex-col gap-3 border-b border-zinc-200 bg-white px-4 py-4 shadow-md sm:hidden dark:border-zinc-800 dark:bg-black">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							className={linkClass(link.href)}
							href={link.href}
							onClick={() => setIsMenuOpen(false)}
						>
							{link.label}
						</Link>
					))}
				</nav>
			)}
		</>
	);
}
