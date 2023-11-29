import mongoose from "mongoose";

const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  type: [{ type: String, required: true }],
  isAnimalFriendly: { type: Boolean },
  image: { type: String, required: true },
  coordinates: {
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
  },
  adress: { type: String, required: true },
  link: { type: String },
  menu: { type: String },
  isChildFriendly: { type: Boolean },
});

const Restaurant =
  mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
