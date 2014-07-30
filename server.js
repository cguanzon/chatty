var messages = [{message:"this is the first message ever"}]

var http = require('http');

var server = http.createServer(function(request, response){
	if(request.method === "GET"){
		response.writeHead(200, {
			"Connection":"close",
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin":"*"
		});
		response.end(JSON.stringify(messages));
	}
	if(request.method === "POST"){
		var postData = '';
		request.on('data', function(chunk){
			postData += chunk.toString();
		});
		request.on('end',function(){
            console.log(JSON.parse(postData));
            messages.push(JSON.parse(postData));
            response.writeHead(200, {
				"Connection":"close",
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin":"*"
			});
			response.end(JSON.stringify(messages));

		});
	}

	
});

server.listen(8888);