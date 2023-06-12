// var http = require('http');

// http.createServer(function (req, res) {
  
//   console.log("Server running on port 80");
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello Heleo Electronics');
  
// }).listen(80);

const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('heleo.key'),
  cert: fs.readFileSync('ffad2677a2e232ba.pem'),
};

const server = https.createServer(options, (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Heleo Electronics');
});

server.listen(443, () => {
  console.log('HTTPS server listening on port 443');
});
