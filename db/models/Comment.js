import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema({
  username: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: String, required: true },
  userimage: { type: String, required: true },
  restaurantID: { type: Schema.Types.ObjectId, ref: "Restaurant" },
  editDate: { type: String },
});

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
