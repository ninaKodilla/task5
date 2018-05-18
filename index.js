
var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");

    if (request.method === "GET" && request.url === '/')  {
        fs.readFile('./assets/index.html', function(err, data) {
            response.write(data);
            response.end();
        })
    } else {
        response.statusCode = 404;
        response.setHeader("Content-Type", "image/gif; charset=utf-8");
        fs.readFile('./assets/img.jpg', function(err, data) {
            response.write(data);
            response.end();
        });
    }
});

server.listen(3000);