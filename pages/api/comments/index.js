import dbConnect from "@/db/connect";
import Comment from "@/db/models/Comment";

export default async function handler(req, res) {
  const { id } = req.query;
  await dbConnect();
  if (req.method === "POST") {
    const comment = await Comment.create(req.body);
    return res.status(201).json(comment);
  }
}
