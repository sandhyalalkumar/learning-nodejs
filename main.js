var http = require("http");

call = function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World, This is nodejs');
}

http.createServer(call).listen(8040)
console.log('Server running at http://127.0.0.1:8040/');