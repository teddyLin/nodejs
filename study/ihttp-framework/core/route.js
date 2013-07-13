exports.getStaticRoute = function() {
	return /^\/(favicon.ico|images|css)/i;
};

//����URL,��ȡController/Action,������GET����
exports.getActionInfo = function(req) {
	var url_parse = require('url').parse;
	var urlInfo = url_parse(req.url, true);
	//---����pathname,��ȡController��Action
	var pathnames = [],
		controller = '',
		action = '',
		_GET = {};
	//����
	var fingers = urlInfo.pathname.split('/');
	for (var i = 0; i < fingers.length; i++) {
		var finger = fingers[i] + ''; //ǿ��ת��Ϊstring
		if(finger != '') pathnames.push(finger);
	}
	//����
	if (pathnames.length > 0) {
		controller = pathnames[0];
		action = pathnames[1] ? pathnames[1] : 'index';
		//��������,��ΪGET
		for(var i = 2; i < pathnames.length; i += 2) {
			_GET[pathnames[i]] = pathnames[i + 1];
		}
	}
	//---����query string,���뵽GET����
	for (var x in urlInfo.query) {
		_GET[x] = urlInfo.query[x]; //�Ѵ��ڵĽ�������
	}
	//---����һ���ṹ
	return {
		"controller": controller,
		"action": action,
		"_GET": _GET
	};
};