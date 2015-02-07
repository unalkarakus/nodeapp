var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(' { text : Hello World }');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
