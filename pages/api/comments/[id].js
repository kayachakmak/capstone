import dbConnect from "@/db/connect";
import Comment from "@/db/models/Comment";

export default async function handler(req, res) {
  const { id } = req.query;
  await dbConnect();
  if (req.method === "DELETE") {
    await Comment.findByIdAndDelete(id);
    res.status(200).json({ status: `Comment ${id} successfully deleted.` });
  }
  if (req.method === "PUT") {
    await Comment.findByIdAndUpdate(id, {
      $set: req.body,
    });
    // Find the joke by its ID and update the content that is part of the request body!
    res.status(200).json({ status: `Comment ${id} updated!` });
    // If successful, you'll receive an OK status code.
  }
}
