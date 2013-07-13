var http    = require('http');
var url     = require('url');

// basicserver.js
exports.createServer = function() {
    var htserver = http.createServer(function(req, res) {
    	// req 的 basicServer
        req.basicServer = {
            urlparsed: url.parse(req.url, true)
        };
        processHeaders(req, res);
        dispatchToContainer(htserver, req, res);
    });
    // htserver 的basic server
    htserver.basicServer = { containers: [] };
    // 
    htserver.addContainer = function(host, path, module, options) {
    	// add container 如果有 抛异常出来
        if (lookupContainer(htserver, host, path) !== undefined) {
            throw new Error("Already mapped "+ host +"/"+ path);
        }
        // 
        htserver.basicServer.containers.push({
            host: host, path: path, module: module, options: options
        });
        return this;
    }
    // 暴露给外面用 
    // 其实就是由外面决定 add container
    htserver.useFavIcon = function(host, path) {
        return this.addContainer(host, "/favicon.ico", require('./faviconHandler'), { iconPath: path });
    }
    // 暴露给外面用
    htserver.docroot = function(host, path, rootPath) {
        return this.addContainer(host, path, require('./staticHandler'), { docroot: rootPath });
    }
    return htserver;
}

// server 下面有很多的container
// 
var lookupContainer = function(htserver, host, path) {
    for (var i = 0; i < htserver.basicServer.containers.length; i++) {
        var container = htserver.basicServer.containers[i];
        var hostMatches = host.toLowerCase().match(container.host);
        var pathMatches = path.match(container.path);
        if (hostMatches !== null && pathMatches !== null) {
            return { container: container, host: hostMatches, path: pathMatches };
        }
    }
    return undefined;
}

// 处理头信息
var processHeaders = function(req, res) {
    req.basicServer.cookies = [];
    var keys = Object.keys(req.headers);
    for (var i = 0, l = keys.length; i < l; i++) {
    	// header 字段
        var hname = keys[i];
        // header的值
        var hval  = req.headers[hname];
        if (hname.toLowerCase() === "host") {
        	// 把主机host的值存起来
            req.basicServer.host = hval;
        }
        if (hname.toLowerCase() === "cookie") {
        	// 把所有cookie值存起来
            req.basicServer.cookies.push(hval);
        }
    }
}

// 分配给各个容器
var dispatchToContainer = function(htserver, req, res) {
    var container = lookupContainer(htserver,
        req.basicServer.host, req.basicServer.urlparsed.pathname);
    if (container !== undefined) {
        req.basicServer.hostMatches = container.host;
        req.basicServer.pathMatches = container.path;
        req.basicServer.container = container.container;
        // 指的是每个 handler, 每个handler必定有handle方法
        container.container.module.handle(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("no handler found for "+ req.host +"/"+ req.urlparsed.path);
    }
}

