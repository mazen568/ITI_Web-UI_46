import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    source: {
      type: String,
      default: "Unknown",
    },

  },
  { timestamps: true }
);

export default mongoose.models.News ||
  mongoose.model("News", NewsSchema);