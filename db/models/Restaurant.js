import mongoose from "mongoose";

const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  coordinates: { type: Object, required: true },
});

const Restaurant =
  mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
