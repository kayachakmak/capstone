import dbConnect from "@/db/connect";
import Restaurant from "@/db/models/Restaurant";

export default async function handler(req, res) {
  await dbConnect();
  const { type } = req.query;
  let query = {};
  if (type) {
    query.type = type;
  }

  if (req.method === "GET") {
    const restaurants = await Restaurant.find(query);
    return res.status(200).json(restaurants);
  } else if (req.method === "POST") {
    try {
      const restaurant = req.body;
      await Restaurant.create(restaurant);
      res.status(201).json({ status: "Restaurant successfully created" });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .json({ error: error.message, status: "Please enter a valid address" });
    }
  }
}
