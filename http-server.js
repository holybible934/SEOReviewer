const hostname = '127.0.0.1';
const port = 8080;
const fs = require('fs');

const server = require('http').createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./http-server-page.html');
  src.pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
