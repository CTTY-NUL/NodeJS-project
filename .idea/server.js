const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    if (req.url === '/test') {
        res.setHeader('Content-Type', 'text/html');
        const htmlLocation = path.join(process.cwd(), 'index.html');
        const html = fs.readFileSync(htmlLocation, {encoding: 'utf-8'});
        res.end(html);
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hallo world');
    }
});
server.listen(3000, '127.0.0.1', () => {
    console.log('server is running.');
});