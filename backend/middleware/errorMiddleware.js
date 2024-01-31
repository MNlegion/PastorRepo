// Express middleware function
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    
    // Set the response status code
    res.status(statusCode);
    
    // Send the error message
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

module.exports = {
    errorHandler
};
