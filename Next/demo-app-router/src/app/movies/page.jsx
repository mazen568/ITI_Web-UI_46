import axios from "axios";
import MediaCard from "@/components/MediaCard";

export default async function MoviesPage() {
  const res = await axios.get("http://localhost:3000/api/movies");
  const movies = res.data;

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-3">Movies</h1>
        <p className="text-zinc-400 text-lg">Explore our curated collection of films</p>
        <div className="mt-4 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
      </div>

      {movies.length === 0 ? (
        <div className="text-zinc-500 text-center py-24">
          <p className="text-xl">No movies found.</p>
          <p className="text-sm mt-2">Add some via the API to get started!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <MediaCard key={movie._id} item={movie} type="movie" />
          ))}
        </div>
      )}
    </div>
  );
}