const express = require("express");
const router = express.Router();
const { getPosts, createPost, updatePost, deletePost } = require("../controllers/postController");

const { protect } = require("../middleware/authMiddleware");

// routes
router.route("/").get(protect, getPosts).post(protect, createPost);
router.route("/:id").put(protect, updatePost).delete(protect, deletePost);

// Export the router
module.exports = router;