require('./define.js'); //����ȫ�ֵ�һЩ����

var url = require('url'),
	path = require('path'),
	fs = require('fs');

/**
 * Application ��
 * ��������н���(req, res)�Ĺ��캯��
 */
exports.class = function(req, res) {
	this._req = req, this._res = res;
	this.dispatcher();
}
exports.class.prototype = {
	dispatcher: function() {
		//�ж��Ƿ�����̬�ļ�
		var staticRoute = route.getStaticRoute();
		if(staticRoute.test(this._req.url)) {
			this.handleStatic();
		} else {
			this.handleDynamic();
		}
	},

	//����̬�ļ�������
	handleStatic: function() {
		var urlInfo = url.parse(this._req.url);
		var file = path.join(ROOT_PATH, urlInfo.pathname);
		var $this = this;
		path.exists(file, function(exists) {
			if (!exists) {
				$this.handle404();
				return;
			}
			fs.stat(file, function(err, stats) {
				if (err) {
					$this.handle500(err);
					return;
				}
				if (!stats.isFile()) {
					$this.handle403();
					return;
				}
				//�������
				fs.readFile(file, function(err, data) {
					if (err) {
						$this.handle500(err);
						return;
					} else {
						var ext = path.extname(file).slice(1);
						if (!ext) ext = 'html';
						$this._res.writeHead(200, {'Content-Type': config.mimes[ext]});
						$this._res.end(data);
					}
				});
			});
		});
	},

	//����̬����
	handleDynamic: function() {
		//����Controller��Action
		var actionInfo = route.getActionInfo(this._req);
		//��ȡִ�нű�
		try {
			var classPath = path.join(CONTROLLER_PATH, actionInfo.controller);
			var classRef = require(classPath).class; //���һ������
			var c = new classRef(this._req, this._res);
			if (typeof(c[actionInfo.action]) != 'function') {
				actionInfo.action = config.defaultAction; //ʹ��Ĭ��action
				if(typeof(c[actionInfo.action]) != 'function') {
					throw new Error('No callable action');
				}
			}
			//ִ�и�handler
			c[actionInfo.action]();
		} catch (e) {
			console.log(e);
			//util.inspect(e);
			this.handle404();
		}
	},

	handle404: function() {
		this._res.writeHead(404, {'Content-Type': 'text/plain'});
		this._res.end('Page Not Found');
	},
	handle403: function() {
		this._res.writeHead(403, {'Content-Type': 'text/plain'});
		this._res.end('Invalid this._request');
	},
	handle500: function(err) {
		this._res.writeHead(500, {'Content-Type': 'text/plain'});
		this._res.end(err);
	}
}