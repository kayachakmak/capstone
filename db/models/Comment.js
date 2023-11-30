import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema({
  userID: { type: String, required: true },
  username: { type: String, required: true },
  comment: { type: String, required: true },
  restaurantID: { type: Schema.Types.ObjectId, ref: "Restaurant" },
});

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
