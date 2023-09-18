"use strict"
const express = require('express');
const app = express();

// Logging middleware function
function logger(req, res, next) {
    console.log(`Received request at ${new Date().toISOString()}:`, req.method, req.url);
    next();
}
// Add the logging middleware function to the pipeline
app.use(logger);

// Serve static files from the public directory
app.use(express.static('public'));

// Define a route for the root URL
app.get('/', (req, res) => {
    let html = make_main_html();
    res.send(html);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});