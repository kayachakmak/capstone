import dbConnect from "@/db/connect";
import Restaurant from "@/db/models/Restaurant";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const restaurants = await Restaurant.find();
    console.log(restaurants);
    return res.status(200).json(restaurants);
  }
}
