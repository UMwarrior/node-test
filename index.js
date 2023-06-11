var http = require('http');

http.createServer(function (req, res) {
  
  console.log("Server running on port 80");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Heleo Electronics');
  
}).listen(80);
