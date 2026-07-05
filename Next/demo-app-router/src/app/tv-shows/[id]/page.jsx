import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default async function TVShowDetails({ params }) {
  const { id } = await params;
  const res = await axios.get(`http://localhost:3000/api/tv-shows/${id}`);
  const show = res.data;
  console.log(show);
  

  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl">
      <Link
        href="/tv-shows"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
      >
        ← Back to TV Shows
      </Link>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Poster */}
        <div className="w-full md:w-1/3 shrink-0">
          <div className="aspect-[2/3] relative rounded-2xl overflow-hidden border border-white/10">
            {show.poster ? (
              <Image
                src={show.poster}
                alt={show.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-500">
                No Image
              </div>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">{show.title}</h1>

          <div className="flex flex-wrap items-center gap-4">
            {show.genre && (
              <span className="px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium">
                {show.genre}
              </span>
            )}
            {show.rating && (
              <span className="text-yellow-500 font-bold text-lg">★ {show.rating}</span>
            )}
            {show.releaseYear && (
              <span className="text-zinc-400">{show.releaseYear}</span>
            )}
          </div>

          {show.director && (
            <p className="text-zinc-400">
              Created by <span className="text-white font-medium">{show.director}</span>
            </p>
          )}

          <div className="border-t border-white/10 pt-6">
            <h2 className="text-lg font-semibold mb-3 text-zinc-300">Overview</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">{show.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
