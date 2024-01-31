const express = require("express");
const router = express.Router();

// routes
router.get("/", (req, res) => {
  res.status(200).json({ message: "Get Post" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Create Post" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update Post ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete Post ${req.params.id}` });
});


// Export the router
module.exports = router;
