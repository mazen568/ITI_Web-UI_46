import mongoose from "mongoose";

const TVShowSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    poster: { type: String },
    rating: { type: Number, default: 0 },
    genre: { type: String },
    releaseDate: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.models.TVShow || mongoose.model("TVShow", TVShowSchema);
