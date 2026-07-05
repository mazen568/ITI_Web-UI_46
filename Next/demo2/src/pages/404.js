import Link from 'next/link';

export default function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 select-none">
      <div className="text-center max-w-md w-full">
        <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">
          404
        </h1>
        
        <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-block mt-2">
          Page Not Found
        </div>

        <p className="text-gray-600 mt-4 text-lg">
          Oops! The page you are looking for doesn&apos;t exist or has been moved to another universe.
        </p>

        <div className="mt-8">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
