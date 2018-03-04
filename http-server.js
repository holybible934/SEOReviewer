const hostname = '127.0.0.1';
const port = 8080;
const fs = require('fs');

const server = require('http').createServer();

server.on('request', (req, res) => {
  if (req.method == 'POST') {
    console.log("POST");
    var body = '';
    req.on('data', function (data) {
        body += data;
        console.log("Partial body: " + body);
    });
    req.on('end', function () {
        console.log("Body: " + body);
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('post received');
  }
  else {
    const src = fs.createReadStream('./http-server-page.html');
    src.pipe(res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
