const express = require("express");
const router = express.Router();
const { getPosts, createPost, updatePost, deletePost } = require("../controllers/postController");

// routes
router.get("/", getPosts);

router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

// Export the router
module.exports = router;
