const http = require('http');
const fs = require('fs');
const path = require('path');
const router = require('./routes/index');

const PORT = 3000;

const server = http.createServer((req, res) => {
    router(req, res);
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});