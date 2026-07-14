"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors ${
      pathname === href
        ? "text-minion-yellow"
        : "text-zinc-600 hover:text-minion-yellow dark:text-zinc-400"
    }`;

  return (
    <>
      <nav className="hidden items-center gap-6 sm:flex">
        {navLinks.map((link) => (
          <Link key={link.href} className={linkClass(link.href)} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
        className="flex cursor-pointer items-center justify-center p-2 text-black dark:text-zinc-50 sm:hidden"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
          {menuOpen ? (
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

      {menuOpen && (
        <nav className="absolute left-0 right-0 top-full z-20 flex flex-col gap-3 border-b border-zinc-200 bg-white px-4 py-4 shadow-md sm:hidden dark:border-zinc-800 dark:bg-black">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className={linkClass(link.href)}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
