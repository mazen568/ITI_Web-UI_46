import { connectDB } from "../../../../lib/mongodb";
import News from "@/../models/News";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const news = await News.find();
    return res.status(200).json(news);
  }

}