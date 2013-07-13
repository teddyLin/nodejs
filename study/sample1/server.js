var dnode = require('dnode');

var config = require('./config/config');
var model = require('./model');
var service = require('./service');

var server;

(function() {
	var mongoose = config.config(__dirname);
	model.bootModels(__dirname, mongoose);
	server = service.bootService(__dirname, dnode, mongoose);
})();

// Æô¶¯·þÎñ
server.listen(5000);