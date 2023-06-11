var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Heleo Electronics');
  console.log("Server running on port 80");
}).listen(80);
