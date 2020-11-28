const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.SERVER_PORT || 8000;

const app = require('./src/app');

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
