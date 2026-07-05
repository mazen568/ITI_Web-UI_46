import { connectDB } from "@/lib/mongodb";
import Movie from "@/models/Movie";

export async function GET(req, { params }) {
  const { id } = await params;
  await connectDB();
  const movie = await Movie.findById(id);
  return Response.json(movie);
}
