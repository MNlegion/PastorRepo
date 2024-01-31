const express = require("express");
const dotenv = require("dotenv").config();
const {errorHandler} = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;

// Initialize express
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
app.use('/api/posts', require('./routes/postRoutes'));

// Error handler
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
