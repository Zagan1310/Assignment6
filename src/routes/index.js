const fs = require('fs');
const path = require('path');

function serveFile(res, filePath, contentType, statusCode = 200) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500 Internal Server Error</h1>');
        } else {
            res.writeHead(statusCode, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

module.exports = (req, res) => {
    const route = req.url;
    if (route === '/' || route === '/home') {
        serveFile(res, path.join(__dirname, '../../public/html/home.html'), 'text/html');
    } else if (route === '/about') {
        serveFile(res, path.join(__dirname, '../../public/html/about.html'), 'text/html');
    } else if (route === '/contact') {
        serveFile(res, path.join(__dirname, '../../public/html/contact.html'), 'text/html');
    } else if (route.startsWith('/css/')) {
        serveFile(res, path.join(__dirname, '../../public', route), 'text/css');
    } else {
        serveFile(res, path.join(__dirname, '../../public/html/404.html'), 'text/html', 404);
    }
};