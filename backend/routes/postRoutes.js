const express = require("express");
const router = express.Router();
const { getPosts, createPost, updatePost, deletePost } = require("../controllers/postController");

// routes
router.route("/").get(getPosts).post(createPost);
router.route("/:id").put(updatePost).delete(deletePost);

// Export the router
module.exports = router;