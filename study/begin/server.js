var http = require("http"),
    util = require("util");

http.createServer(function (request, response) {
	response.writeHead(200, {
		"Content-Type" : "text/plain"
	});
	
	var postData = '';
    request.addListener("data", function(postDataChunk) {  // 有新的数据包到达就执行
      postData += postDataChunk;
      console.log("Received POST data chunk '"+
      postDataChunk + "'.");
    });
 
    request.addListener("end", function() {  // 数据传输完毕
      console.log('post data finish receiving: ' + postData );
      console.log(util.inspect(postData, true, true, true));
      response.writeHead(200, {
  			"Content-Type" : "text/plain"
  	  });
      response.end();
    });
	response.end();
}).listen(8888);
