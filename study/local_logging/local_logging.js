/**
 * Created with JetBrains WebStorm.
 * User: yelin
 * Date: 13-3-20
 * Time: 下午9:49
 * To change this template use File | Settings | File Templates.
 */

var port = 3000;

var http = require("http"),
    url = require("url"),
    fs = require("fs");

var server = http.createServer(function (req, res) {
    fs.openSync("D:/logRoc.txt", "a+");
    buildResponse(req, res);
});

server.listen(port);
console.log('server start at http://127.0.0.1:' + port);

function buildResponse(req, res) {

    var responseBody = {
        success :  false
    };
    var pathname = getPathName(req);
    if ('POST' == req.method) {
        var body = '';
        req.on('data', function(data) {
            body += data;
        });
        req.on('end', function() {
            var decode_body = decodeURIComponent(body);
            console.log(decode_body);
            logging(decode_body);
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

function logging(log) {
    var date = new Date(),
        time = date.getFullYear() + '/' + (date.getMonth() + 1) +
            '/' + date.getDate() + " " + date.getHours() +
            ":" + date.getMinutes() + ":" + date.getSeconds() +
            ":" + date.getMilliseconds();

    fs.appendFile("D:/logRoc.txt", time + " " + log + "\r\n");
}
