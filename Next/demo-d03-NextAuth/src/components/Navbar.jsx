import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
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
          <ThemeToggle />
        </div>
        
      </nav>
    </div>
  );
}
