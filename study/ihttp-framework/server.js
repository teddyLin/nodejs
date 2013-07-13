var http = require('http'),
	querystring = require('querystring');

/**
 * Server ��
 * ����һ��������,����ָ����application
 */
exports.class = function(port){
	this._port = port;
}
exports.class.prototype = {
	runApplication: function(appClass) {
		http.createServer(function(req, res) {
			console.log('[' + req.method + ']', req.url);
			var _postData = '';
			
			//��ȡPOST����
			req.on('data', function(data) {
				_postData += data;
				console.log('[Received]' + data.length);
			});
			
			req.on('end', function() {
				//����POST����
				req.post = querystring.parse(_postData);
				//����dispatcher
				new appClass(req, res);
			});
			
		}).listen(this._port);
		console.log('Server is running at port ' + this._port);
	}
}