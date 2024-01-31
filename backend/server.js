const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

// Initialize express
const app = express();

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
