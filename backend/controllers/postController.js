const asyncHandler = require("express-async-handler");

// @desc    Get all posts
// @route   GET /api/posts
// @access  Private
const getPosts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Post" });
});

// @desc    Create Post
// @route   POST /api/posts
// @access  Private
const createPost = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.text) {
    res.status(400);
    throw new Error("Please enter a title and text field");
  }

  res.status(200).json({ message: "Create Post" });
});

// @desc    Update Post
// @route   PUT /api/posts
// @access  Private
const updatePost = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Post ${req.params.id}` });
});

// @desc    Delete Post
// @route   DELETE /api/posts
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Post ${req.params.id}` });
});

// exports
module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
