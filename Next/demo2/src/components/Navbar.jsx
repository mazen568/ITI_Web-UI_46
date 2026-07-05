import Link from "next/link";
export default function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <nav className="flex justify-center px-8 py-4 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm">
        <div className="flex gap-8">
          <Link href="/" className="text-gray-600 hover:text-purple-700 font-medium transition-colors">
            Home
          </Link>
          <Link href="/about-us" className="text-gray-600 hover:text-purple-700 font-medium transition-colors">
            About
          </Link>
          <Link
            href="/products"
            className="text-gray-600 hover:text-purple-700 font-medium transition-colors"
          >
            Products
          </Link>
        </div>
        
      </nav>
    </div>
  );
}
