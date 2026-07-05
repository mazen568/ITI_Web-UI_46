import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  rating: Number,
  comment: String,
  reviewer: String,
});

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  rating: Number,
  stock: Number,
  availabilityStatus: String,
  discountPercentage: Number,
  brand: String,
  category: String,
  reviews: [ReviewSchema],
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
