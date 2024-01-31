const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

// Initialize express
const app = express();

// Import routes
app.use('/api/posts', require('./routes/postRoutes'));



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
