import { connectDB } from "@/lib/mongodb";
import TVShow from "@/models/TVShow";

export async function GET() {
  await connectDB();
  const tvShows = await TVShow.find();
  return Response.json(tvShows);
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const tvShow = await TVShow.create(body);
  return Response.json(tvShow, { status: 201 });
}
