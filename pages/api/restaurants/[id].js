import dbConnect from "@/db/connect";
import Restaurant from "@/db/models/Restaurant";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  if (req.method === "GET") {
    const restaurant = await Restaurant.findById(id);
    return res.status(200).json(restaurant);
  }
}
