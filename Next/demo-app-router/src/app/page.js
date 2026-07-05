import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-6rem)] items-center justify-center text-center px-6">
      <div className="max-w-4xl w-full">
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-gradient leading-tight">
          CINEMA <br /> REDEFINED
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Experience the finest collection of movies and TV shows in a sleek, modern interface designed for true cinephiles.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/movies"
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black font-bold text-lg transition-transform hover:scale-105 active:scale-95"
          >
            Explore Movies
          </Link>
          <Link
            href="/tv-shows"
            className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-lg transition-all hover:bg-white/10 hover:border-white/40 active:scale-95"
          >
            TV Shows
          </Link>
        </div>
      </div>
      
    
    </div>
  );
}
