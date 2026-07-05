import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  genre: { type: String, required: true },
  rating: Number,
  releaseYear: Number,
  poster: String,
  director: String,
}, { timestamps: true });

export default mongoose.models.Movie || mongoose.model("Movie", MovieSchema);