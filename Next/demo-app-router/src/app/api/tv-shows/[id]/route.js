import { connectDB } from "@/lib/mongodb";
import TVShow from "@/models/TVShow";

export async function GET(req, { params }) {
  const { id } = await params;
  await connectDB();
  const tvShow = await TVShow.findById(id);
  return Response.json(tvShow);
}
