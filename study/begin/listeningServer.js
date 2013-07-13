var port = 3000;

var http = require("http"),
    url = require("url");

var server = http.createServer(function (req, res) {

    /*console.log(req.method);
    console.log(req.url);
    console.log(JSON.stringify(url.parse(req.url)));*/

    console.log('receive a request');

    buildResponse(req, res);
});

server.listen(port);
console.log('server start at http://127.0.0.1:' + port);

function buildResponse(req, res) {

    var responseBody = {
        success :  false
    };
    var pathname = getPathName(req);

    if (req.method == "GET" && pathname == "/log") {
        responseBody.success = true;
    }else if ('POST' == req.method) {
        var body = '';
        req.on('data', function(chunk) {
            body += chunk;
        })            ;
        req.on('end', function() {
            console.log(body);
            var decode_body = decodeURIComponent(body);

            console.log(decode_body);

            var obj_body = JSON.parse(decode_body);
            console.log(obj_body);
            res.end('end');
        });
    }

    var resString = JSON.stringify(responseBody);
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(resString);
    res.end();
}

function getPathName(req) {
    return url.parse(req.url).pathname;
}
