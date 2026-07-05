import Image from "next/image";
import Link from "next/link";

export default function MediaCard({ item, type = "movie" }) {
  const href = type === "movie" ? `/movies/${item._id}` : `/tv-shows/${item._id}`;

  return (
    <Link href={href} className="movie-card group block">
      <div className="aspect-[2/3] relative">
        {item.poster ? (
          <Image
            src={item.poster}
            alt={item.title}
            fill
            className="object-cover transition-transform group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-500">
            No Image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
          <p className="text-sm text-zinc-300 line-clamp-4">{item.description}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">{item.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-zinc-400 text-sm">{item.genre || (type === "movie" ? "Action" : "Drama")}</span>
          <span className="text-yellow-500 font-bold">★ {item.rating || "N/A"}</span>
        </div>
      </div>
    </Link>
  );
}
