var http = require('http');
var server = http.createServer(handleRequest);
var fs = require('fs');

server.listen(8888, function(){
    console.log('server is listening');
});

function handleRequest(request, response) {
    console.log('handling request');

    fs.readFile('index.html', function (err, data) {
        if (err) {
            response.writeHead(404);
            console.log('error is ', err);
            response.end(err);
        } else {
            response.writeHead(200);
            console.log(data);
            response.end(data);
        }
    });
}
