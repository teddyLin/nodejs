var http = require("http"),
	url = require("url");

http.createServer(function (request, response) {
	/**
	 *  
	 */
	console.log(request.url);
	
	var pathname = url.parse(request.url, true, true).pathname,
		hostname = url.parse(request.url, true, true).host;
	
	var urlObj = url.parse(request.url, true, true);
	
	console.log(pathname);
	console.log(hostname);
	
	console.log("href = " + urlObj.href);
	console.log("protocol = " + urlObj.protocol);
	console.log("auth = " + urlObj.auth);
	console.log("hostname = " + urlObj.hostname);
	console.log("port = " + urlObj.port);
	console.log("pathname = " + urlObj.pathname);
	console.log("search = " + urlObj.search);
	console.log("path = " + urlObj.path);
	console.log("query = " + urlObj.query);
	console.log("hash = " + urlObj.hash);
	response.writeHead(200, {
		"Content-Type" : "text/plain"
	});
	response.end();
}).listen(8888);
