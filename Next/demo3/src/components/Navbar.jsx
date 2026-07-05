import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex justify-between items-center px-8 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-purple-100 dark:border-slate-800 shadow-sm transition-colors duration-300">
        <div className="flex gap-8">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition-colors">
            Home
          </Link>
          <Link href="/about-us" className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition-colors">
            About
          </Link>
          <Link
            href="/products"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition-colors"
          >
            Products
          </Link>
          <Link
            href="/admin/products"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition-colors"
          >
            Admin
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          {session ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Hi, {session.user.name || session.user.email}</span>
              <button
                onClick={() => signOut()}
                className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-purple-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-purple-700 transition-all shadow-sm"
            >
              Sign In
            </button>
          )}
          <ThemeToggle />
        </div>
        
      </nav>
    </div>
  );
}
