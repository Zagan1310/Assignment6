const http = require('http'); // Import Node.js HTTP module
const fs = require('fs');     // Import File System module (not used here, but often needed)
const path = require('path'); // Import Path module (not used here, but often needed)
const router = require('./routes/index'); // Import the router function

const PORT = 3000; // Define the port number

// Create the HTTP server and pass requests to the router
const server = http.createServer((req, res) => {
    router(req, res); // Delegate request handling to router
});

// Start the server and log a message when running
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});