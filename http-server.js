const hostname = '127.0.0.1';
const port = 8080;
const fs = require('fs');

const server = require('http').createServer();

server.on('request', (req, res) => {
  fs.readFile('./http-server-page.html', (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
