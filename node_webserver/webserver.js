var http = require('http');
var server = http.createServer(handleRequest);

server.listen(8888, function(){
    console.log('server is listening');
});

function handleRequest(request, response){
    console.log('handling request');
    response.write('initializing request response\n');
    response.end('It works!! Path Hit: ', request.url);
}