const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    text: {
      type: String,
      required: [true, "Text is required"],
    },
    upvotes: {
      type: Number,
      default: 1,
    },
    downvotes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Post", postSchema);
