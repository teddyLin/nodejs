var Template = require('./template').class;
/**
 * Controller ����
 * @param req
 * @param res
 */

exports.class = function(req, res) {
	this._request = req, this._response = res;
};
exports.class.prototype = {
	_template: new Template(),
	vendor: function(view, assign) {
		this._response.writeHead(200, {'Content-Type': config.mimes['html']});
		//�ҵ�view�ļ�
		var file = require('path').join(VIEW_PATH, view + '.html'); //һ����html��β
		this._response.write(this._template.parse(file, assign));
		this._response.end();
	}
};