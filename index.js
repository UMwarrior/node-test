// var http = require('http');

// http.createServer(function (req, res) {
  
//   console.log("Server running on port 80");
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello Heleo Electronics');
  
// }).listen(80);

const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('6497065d390a8d58.pem', 'utf8'),
  cert: fs.readFileSync('6497065d390a8d58.crt', 'utf8'),
};

const server = https.createServer(options, (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Heleo Electronics');
});

server.listen(443, () => {
  console.log('HTTPS server listening on port 443');
});
