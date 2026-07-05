"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Movies", href: "/movies" },
    { name: "TV Shows", href: "/tv-shows" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-6 px-12">
      <div className="flex items-center gap-8 px-8 py-3 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl shadow-2xl">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all hover:text-white ${
                isActive
                  ? "text-white scale-105"
                  : "text-zinc-400"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}