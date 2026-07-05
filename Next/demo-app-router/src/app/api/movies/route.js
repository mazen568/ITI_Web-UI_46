import { connectDB } from "@/lib/mongodb";
import Movie from "@/models/Movie";

export async function GET() {
    await connectDB();
    const movies = await Movie.find();
    return Response.json(movies);
}

export async function POST(req) {
    await connectDB();
    const body = await req.json();
    const movie = await Movie.create(body);
    return Response.json(movie, { status: 201 });
}