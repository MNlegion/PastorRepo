const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");
const User = require("../models/userModel");

// @desc    Get all posts
// @route   GET /api/posts
// @access  Private
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user.id });

  res.status(200).json(posts);
});

// @desc    Create Post
// @route   POST /api/posts
// @access  Private
const createPost = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.text) {
    res.status(400);
    throw new Error("Please enter a title and text field");
  }

  const post = await Post.create({
    title: req.body.title,
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(post);
});

// @desc    Update Post
// @route   PUT /api/posts
// @access  Private
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  // Check if user exists
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Check if the user is the owner of the post
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedPost = await Post.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      text: req.body.text,
    },
    { new: true }
  );

  res.status(200).json(updatedPost);
});

// @desc    Delete Post
// @route   DELETE /api/posts
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  // Check if user exists
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Check if the user is the owner of the post
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await post.deleteOne();

  res.status(200).json({ id: req.params.id });
});

// exports
module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
